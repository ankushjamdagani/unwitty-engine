import { Vector2D } from "../core";
import { ENTITY_NODE_TYPES } from "../../constants";

import Renderers from "./Renderers";
import Camera from "./Camera";

// Maybe
// Checks which ones are ideal and don't need updating
// i.e. checks if elements are sleeping
class Renderer {
  constructor(props) {
    this.props = props;
    const screen = props.screen;
    this.camera = new Camera({
      position: Vector2D.zero(),
      rotation: 0,
      screen,
    });
  }
  // Scene Graph method
  // - depth first render
  // - check if in camera viewport (cunning)
  // - raytracing using light

  // Brute force method
  render(elements, engine) {
    const {
      canvas: { context },
      screen: { width, height },
    } = this.props;
    const camera = this.camera;

    // Learn when to partial clear canvas. and where.
    context.clearRect(0, 0, width, height);

    camera.update();

    for (const element of elements) {
      if (ENTITY_NODE_TYPES.WORLD === element.type) {
      } else if (ENTITY_NODE_TYPES.LIGHT === element.type) {
      } else if (ENTITY_NODE_TYPES.TRANSFORM === element.type) {
      } else if (ENTITY_NODE_TYPES.ELEMENT === element.type) {
        const renderProps = element.props.renderProps;
        context.beginPath();
        Renderers[element.shape][renderProps.shapeStyle](
          element,
          {
            context,
            camera,
          },
          renderProps
        );
        context.closePath();
      } else if (element.render) {
        element.render();
      }
    }
  }
}

export default Renderer;
