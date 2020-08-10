import Component from "../Engine/Component";
import { CreateRect, CreateText, CreateImage } from "../Engine/Creator";

import HeartFilled from "../assets/images/HeartFilled.svg";

class ScoreBoardScene extends Component {
  constructor(props) {
    super(props);

    this.preload([{ key: "HeartFilled", src: HeartFilled }]);
  }

  reset() {
    const { gameInstance } = this.props;
    gameInstance.changeScore(0);
  }

  update() {
    const { ctx, gameInstance, width } = this.props;

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
      text: gameInstance.getScore(),
      font: "30px primaryFont",
      fontColor: "#000",
    });

    if (this.assets["HeartFilled"]) {
      CreateImage({
        ctx,
        image: this.assets["HeartFilled"],
        x: width - 190,
        y: 110,
        width: 32,
        height: 32,
      });

      CreateImage({
        ctx,
        image: this.assets["HeartFilled"],
        x: width - 130,
        y: 110,
        width: 32,
        height: 32,
      });

      CreateImage({
        ctx,
        image: this.assets["HeartFilled"],
        x: width - 70,
        y: 110,
        width: 32,
        height: 32,
      });
    }
  }
}

export default ScoreBoardScene;
