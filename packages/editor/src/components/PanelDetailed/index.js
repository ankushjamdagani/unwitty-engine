import Panel from '../Panel';

function PanelDetailed({ children, ...rest }) {
  return (
    <Panel canResize {...rest}>
      {children}
    </Panel>
  );
}

export default PanelDetailed;
