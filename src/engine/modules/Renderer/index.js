import Renderers from "./Renderers";

// Maybe
// Checks which ones are ideal and don't need updating
// i.e. checks if elements are sleeping
class Renderer {
  // Scene Graph method
  // - depth first render
  // - check if in camera viewport (cunning)
  // - raytracing using light

  // Brute force method
  render({ element, envProps }) {
    if (element && element.props && element.shape) {
      const renderProps = element.props.renderProps;
      envProps.ctx.beginPath();
      Renderers[element.shape][renderProps.shapeStyle](
        element,
        envProps,
        renderProps
      );
      envProps.ctx.closePath();
    }
  }
}

export default Renderer;
