class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.elements = {};
  }

  setState(state = {}) {
    this.state = {
      ...this.state,
      ...state,
    };
  }

  setElements(elements = {}) {
    this.elements = {
      ...this.elements,
      ...elements,
    };
  }

  start() {}

  stop() {}

  reset() {}

  update() {}
}

export default Component;
