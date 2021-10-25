import Panel from '../Panel';

function PanelSticky({ children, ...rest }) {
  return (
    <Panel {...rest} canDrag={false} canResize={false} canClose={false}>
      {children}
    </Panel>
  );
}

export default PanelSticky;
