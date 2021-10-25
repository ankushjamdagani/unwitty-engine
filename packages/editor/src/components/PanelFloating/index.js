import Panel from '../Panel';

function PanelFloating({ children, ...rest }) {
  return (
    <Panel canDrag canClose canResize {...rest}>
      {children}
    </Panel>
  );
}

export default PanelFloating;
