import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { FlexBox } from '__COMPONENTS/atoms';

const Wrapper = styled(FlexBox)`
  background: rgba(0, 0, 0, 0.1);
  font-family: monospace;
  border-right: dashed 1px #ffffff38;
`;

const NodeItem = styled(FlexBox)`
  border-bottom: dotted 1px ${themeGet('colors.white.4')};

  ${(props) =>
    props.active &&
    css`
      color: ${themeGet('colors.background')};
      background: ${themeGet('colors.text')};
    `}

  ${(props) =>
    props.showCursor &&
    css`
      cursor: pointer;
    `}
`;

const Node = ({ nodeId, entities, active, onClick }) => {
  const activeNode = entities[nodeId];
  return (
    <>
      <NodeItem showCursor={!!onClick} active={active} onClick={onClick}>
        {activeNode.label}
      </NodeItem>
      <FlexBox
        pl={4}
        alignItems='flex-start'
        justifyContent='flex-end'
        flexDirection='column'
      >
        {activeNode.children.map((id) => (
          <Node key={id} nodeId={id} entities={entities} />
        ))}
      </FlexBox>
    </>
  );
};

const SceneGraph = ({ entities, activeSceneId, engine }) => {
  const scenes = Object.values(entities).filter(
    (node) => node.type === 'scene'
  );

  return (
    <Wrapper
      p={4}
      alignItems='flex-start'
      zIndex='111'
      flexDirection='column'
      height='100%'
    >
      {scenes.map((sc) => (
        <Node
          key={sc.id}
          nodeId={sc.id}
          entities={entities}
          active={activeSceneId === sc.id}
          onClick={() => {
            engine.changeActiveScene(sc.id);
          }}
        />
      ))}
    </Wrapper>
  );
};

export default connect((state) => ({
  entities: state.entities,
  activeSceneId: state.core.activeSceneId
}))(SceneGraph);
