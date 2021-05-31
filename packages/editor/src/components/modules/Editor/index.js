import React, { useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { DataStore } from '@unwitty/core';

import {
  StatusBar,
  MenuBar,
  ControlsBar,
  EditorCanvas
} from '../../sub-modules';
import { LayoutDropArea } from '../../_shared';

import DataStoreContext from '../../../dataStore/context';
import { LAYOUT_AREAS } from '../../../constants';

const getOrientationByArea = {
  [LAYOUT_AREAS.TOP]: 'horizontal',
  [LAYOUT_AREAS.RIGHT]: 'vertical',
  [LAYOUT_AREAS.BOTTOM]: 'horizontal',
  [LAYOUT_AREAS.LEFT]: 'vertical'
};

const getPanelComponent = {
  MENU_BAR: MenuBar,
  CONTROLS_BAR: ControlsBar,
  STATUS_BAR: StatusBar
};

const getPanelProps = {
  MENU_BAR: ({ props: { config } }) => ({ projectConfig: config }),
  CONTROLS_BAR: ({
    props: { orientation },
    handlers: { onPanelDragStart, onPanelDragEnd, onPanelDragging }
  }) => ({
    orientation,
    onDragStart: onPanelDragStart,
    onDragEnd: onPanelDragEnd,
    onDrag: onPanelDragging
  }),
  STATUS_BAR: ({}) => ({})
};

function getAreaComponents({
  area,
  selectedPanel,
  props: { layoutState, ...props },
  handlers
}) {
  const { onTargetSaveRef, onTargetDragOver, onTargetDragDrop } = handlers;
  const areaComponents = layoutState[area];
  const orientation = getOrientationByArea[area];

  return [
    ...areaComponents.map((cm, index) => {
      const Component = getPanelComponent[cm];
      const componentProps = getPanelProps[cm]({
        props: {
          ...props,
          orientation
        },
        handlers
      });
      return (
        <React.Fragment key={cm}>
          <LayoutDropArea
            orientation={orientation}
            targetSize='1'
            onDragOver={onTargetDragOver}
            onDrop={onTargetDragDrop}
            isFocus={selectedPanel === `${area}_${index}`}
            ref={ref =>
              onTargetSaveRef(ref, { orientation, area, position: index })
            }
          />
          <Component {...componentProps} />
        </React.Fragment>
      );
    }),
    <LayoutDropArea
      orientation={orientation}
      targetSize='1'
      key='last'
      onDragOver={onTargetDragOver}
      onDrop={onTargetDragDrop}
      isFocus={selectedPanel === `${area}_${areaComponents.length}`}
      ref={ref =>
        onTargetSaveRef(ref, {
          orientation,
          area,
          position: areaComponents.length
        })
      }
    />
  ];
}

function Editor({ ...props }) {
  const { projectId, engine } = props;
  const refsMap = useRef({});
  const [draggingPanel, setDraggingPanel] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(null);

  const loading = !engine;

  const onChangeLayout = useCallback((...args) => {
    console.log(args);
  }, []);

  const onPanelDragStart = (e, data) => {
    e.stopPropagation();

    setDraggingPanel(data);

    e.dataTransfer.setData('text/plain', data);
  };

  const onPanelDragging = e => {
    e.stopPropagation();

    let xDist = null;
    let yDist = null;
    let closestPanel = null;

    const { clientX, clientY } = e;

    for (const key in refsMap.current) {
      if (Object.hasOwnProperty.call(refsMap.current, key)) {
        const comp = refsMap.current[key];
        if (!comp.ref) continue;
        const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = comp.ref;
        const offsetRight = offsetLeft + offsetWidth;
        const offsetBottom = offsetTop + offsetHeight;

        if (comp.orientation === 'horizontal') {
          if (offsetLeft < clientX && offsetRight > clientX) {
            const beforeDist = Math.abs(clientY - offsetTop);
            const afterDist = Math.abs(clientY - offsetBottom);
            const minDist = Math.min(beforeDist, afterDist);

            if ((yDist === null && minDist < 100) || minDist <= yDist) {
              closestPanel = key;
              yDist = minDist;
            }
          }
        } else {
          if (offsetTop < clientY && offsetBottom > clientY) {
            const beforeDist = Math.abs(clientX - offsetLeft);
            const afterDist = Math.abs(clientX - offsetRight);
            const minDist = Math.min(beforeDist, afterDist);

            if ((xDist === null && minDist < 100) || minDist < xDist) {
              closestPanel = key;
              xDist = minDist;
            }
          }
        }
      }
    }

    if (closestPanel && closestPanel !== selectedPanel) {
      setSelectedPanel(closestPanel);
    }
  };

  const onPanelDragEnd = e => {
    e.stopPropagation();

    if (!selectedPanel) return;

    const [area, pos] = selectedPanel.split('_').map(el => Number(el));

    DataStore.setData(
      workspace => {
        const currArea = workspace.panels[draggingPanel].area;
        const currPos = workspace.panels[draggingPanel].position;

        delete refsMap.current[`${currArea}_${currPos + 1}`];

        const isAreaSame = currArea === area;
        const isPositionSame = currPos === pos || currPos === pos + 1;

        if (isAreaSame && isPositionSame) {
          return;
        }

        // remove from curr position
        workspace.layout[currArea].splice(currPos, 1);

        // insert into new position
        workspace.layout[area].splice(pos, 0, draggingPanel);

        workspace.panels[draggingPanel].area = area;
        workspace.panels[draggingPanel].position = pos;

        console.log(workspace.layout);
      },
      'workspace',
      'app_state'
    );

    console.log(DataStore.getData('workspace', 'app_state'));

    setSelectedPanel(null);
  };

  const onTargetSaveRef = useCallback((ref, { area, position }) => {
    const orientation = getOrientationByArea[area];
    refsMap.current[`${area}_${position}`] = {
      orientation,
      area,
      position,
      ref
    };
  }, []);

  const onTargetDragOver = e => {
    e.stopPropagation();
  };

  const onTargetDragDrop = e => {
    e.stopPropagation();
  };

  const handlers = {
    onPanelDragStart,
    onPanelDragEnd,
    onPanelDragging,
    onTargetSaveRef,
    onTargetDragOver,
    onTargetDragDrop
  };

  return (
    <>
      <DataStoreContext.Provider value={{ key: projectId, engine }}>
        <Flex
          height='100%'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          background='gray.100'
        >
          {getAreaComponents({
            area: LAYOUT_AREAS.TOP,
            selectedPanel,
            props,
            handlers
          })}
          <Flex
            justifyContent='space-between'
            flex={1}
            alignItems='flex-start'
            width='100%'
          >
            <Flex alignItems='center' justifyContent='center' height='100%'>
              {getAreaComponents({
                area: LAYOUT_AREAS.LEFT,
                selectedPanel,
                props,
                handlers
              })}
            </Flex>
            <Flex alignItems='center' justifyContent='center' height='100%'>
              {getAreaComponents({
                area: LAYOUT_AREAS.RIGHT,
                selectedPanel,
                props,
                handlers
              })}
            </Flex>
          </Flex>
          {getAreaComponents({
            area: LAYOUT_AREAS.BOTTOM,
            selectedPanel,
            props,
            handlers
          })}
        </Flex>
        <EditorCanvas isLoading={loading} />
      </DataStoreContext.Provider>
    </>
  );
}

export default connect(state => ({
  layoutState: state?.app_state?.workspace?.layout
}))(Editor);
