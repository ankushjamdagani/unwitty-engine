import { core, DataStore } from '../modules';
import EntityManager from './EntityManager';

const { Base } = core;

class UpdateManager extends Base {
  constructor(props) {
    super(props);

    this.props = props;
  }

  updateTree(nodeId, deltaTime) {
    const { entities, canvasMap } = this.props.getData();

    DataStore.setData((entities) => {
      entities.transform1.rotate += deltaTime / 10;
      entities.transform2.rotate += deltaTime / 10;
    }, 'entities');

    this.updateNode(nodeId, { entities, canvasMap });
  }

  updateNode(elementId, envProps) {
    const element = envProps.entities[elementId];

    if (!element) return;

    EntityManager.preUpdate(element, envProps);

    const updatedEntity = EntityManager.update(element, envProps);

    updatedEntity &&
      DataStore.setData((entities) => {
        entities[elementId] = updatedEntity;
      }, 'entities');

    element.children.forEach((el) => {
      this.updateNode(el, envProps);
    });

    EntityManager.postUpdate(element, envProps);
  }
}

export default UpdateManager;
