import Renderers from "./Renderers";
import Camera from "./Camera";
import Light from "./Light";

// Sets Light
// Sets camera view
// Renders all elements

// Maybe
// Checks which ones are ideal and don't need updating
// i.e. checks if elements are sleeping
const Renderer = () => {
  this.elements = []; // or sceneGraph
  this.camera = new Camera();
  this.light = new Light();

  // root is world
  // childrens are transformation, camera, light and elements
  // node type
  // node id
  // node isRenderable
  this.sceneGraph = [];

  // Rnder depth first
  this.render = (envProps) => {
    // Brute force method
    this.elements.forEach((element) => {
      const renderProps = element.props.renderProps;
      envProps.ctx.beginPath();
      Renderers[element.shape][renderProps.shapeType](
        element,
        envProps,
        renderProps
      );
      envProps.ctx.closePath();
    });

    // Scene Graph method
    // - depth first render
    // - check if in camera viewport
    // - raytracing using light
  };
};

export default Renderer;
