import { useMemo } from 'react';
import { connect } from 'react-redux';

import { PanelIconned } from '../../../../components';

const ControlsBar = ({
  // selectedOption = '',
  // onOptionSelect = () => {},
  onDragStart,
  options,
  ...props
}) => {
  const _options = useMemo(
    () => (options ? Object.values(options) : []),
    [options]
  );

  return (
    <PanelIconned
      canDrag
      onDragStart={e => onDragStart(e, 'CONTROLS_BAR')}
      options={_options}
      {...props}
    />
  );
};

export default connect(
  state => ({
    options: state.app_state?.actionTriggers
  }),
  {}
)(ControlsBar);
