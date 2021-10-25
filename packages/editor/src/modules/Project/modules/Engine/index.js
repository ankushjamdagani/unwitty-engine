import React from 'react';
import Engine from '@unwitty/engine';

import mountGame from '../../../../helperHooks/mountGame';

class EngineWrapper extends React.Component {
  componentDidMount() {
    const { config, setEngine } = this.props;

    const instance = Engine.init(config);

    instance.on('on_ready', () => {
      mountGame(instance);
      setEngine(instance);
      console.log('-> ENGINE READY');
    });
  }

  componentWillUnmount() {
    this.props?.engine?.destroy();
  }

  render() {
    const { projectId } = this.props;
    return (
      <div
        id={`${projectId}_wrapper`}
        className='unwitty_game_wrapper'
        ref={el => (this.el = el)}
      />
    );
  }
}

export default EngineWrapper;
