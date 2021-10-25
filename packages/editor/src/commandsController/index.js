import emitter from './emitter';
import list from './list';

/**
 * Handle Shortcuts
 * ================
 *
 * - Event Handler for keyboard bindings
 * - How to handle multiple actions - delete entity vs delete project
 * 
 * 
 * 
 *  {
      tabs: [
        {
          id,
          name
        }
      ],
      projects: [],
    }

    - JSON config for commands
    - Event Emitters for
      - Notifications
      - Keyboard Shortcuts
    - Commands Bar
    - Engine State

    - commands
      - Engine
      - Wasm
 */

class CommandsController {
  constructor(emitter, list) {
    this.register = new Map();
    this.emitter = emitter;

    this.add(list);
  }

  add(commands) {
    for (const cmd of commands) {
      if (this.register.has(cmd.id)) {
        throw new Error(`Command with name ${cmd.id} already exists.`);
      }

      this.register.set(cmd.id, cmd.handler);
    }
  }

  remove(commands) {
    for (const cmd of commands) {
      this.register.delete(cmd.id);
    }
  }

  execute(command, ...data) {
    this.register.get(command).handler(...data);
    this.emitter.emit(command.id, ...data);
  }
}

const commandsController = new CommandsController(emitter, list);

export default commandsController;
