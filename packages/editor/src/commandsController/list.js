import HomeCommands from '../modules1/Home';
import ProjectCommands from '../modules1/ProjectPanel';
import ToolbarCommands from '../modules1/PrimaryToolbar';
import SceneGraphCommands from '../modules1/SceneGraph';

const list = [
  ...HomeCommands,
  ...ProjectCommands,
  ...ToolbarCommands,
  ...SceneGraphCommands
];

export default list;
