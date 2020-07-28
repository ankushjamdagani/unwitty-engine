import Component from "../HOC/Component";

import { CreateRect, CreateText } from "../helpers/Creator";

class ScoreBoardScene extends Component {
  reset() {
    const { envApi } = this.props;
    envApi.changeScore(0);
  }

  update() {
    const { ctx, envApi, width } = this.props;

    CreateRect({
      ctx,
      x: width - 210,
      y: 10,
      width: 200,
      height: 80,
      strokeSize: 4,
      strokeColor: "rgba(0,0,0,1)",
    });

    CreateText({
      ctx,
      x: width - 190,
      y: 40,
      text: "SCORE",
      font: "14px primaryFont",
      fontColor: "#000",
    });

    CreateText({
      ctx,
      x: width - 190,
      y: 80,
      text: envApi.getScore(),
      font: "30px primaryFont",
      fontColor: "#000",
    });
  }
}

export default ScoreBoardScene;
