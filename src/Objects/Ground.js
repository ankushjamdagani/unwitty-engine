import bg from "../assets/images/Brick - Large - Strong.svg";

import Component from "../HOC/Component";

import { CreateRect } from "../helpers/Creator";

class Ground extends Component {
  constructor(props) {
    super(props);

    this.preload([
      {
        key: "bg",
        src: bg,
      },
    ]);
  }

  update() {
    const { x, y, width, height, env } = this.props;

    if (this.assets["bg"]) {
      const pattern = env.ctx.createPattern(this.assets["bg"], "repeat");
      CreateRect({
        ctx: env.ctx,
        x,
        y,
        width,
        height,
        fillColor: pattern,
      });
    }
  }
}

export default Ground;
