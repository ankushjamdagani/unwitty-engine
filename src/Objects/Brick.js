import Component from '../HOC/Component';

import { CreateImage } from '../Engine/Creator';

import BrickSmall3 from '../assets/images/Brick - Small - Strong.svg';
import BrickSmall2 from '../assets/images/Brick - Small - Weak.svg';
import BrickSmall1 from '../assets/images/Brick - Small - Weakest.svg';

import BrickMedium3 from '../assets/images/Brick - Medium - Strong.svg';
import BrickMedium2 from '../assets/images/Brick - Medium - Weak.svg';
import BrickMedium1 from '../assets/images/Brick - Medium - Weakest.svg';

import BrickLarge3 from '../assets/images/Brick - Large - Strong.svg';
import BrickLarge2 from '../assets/images/Brick - Large - Weak.svg';
import BrickLarge1 from '../assets/images/Brick - Large - Weakest.svg';

const ImageSizeMap = [
  [BrickSmall3, BrickSmall2, BrickSmall1],
  [BrickMedium3, BrickMedium2, BrickMedium1],
  [BrickLarge3, BrickLarge2, BrickLarge1]
];

const ImageStrengthMap = {
  0: 'Weakest',
  1: 'Weak',
  2: 'Strong'
};

class Brick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strength: props.strength
    };

    this.preload([
      {
        key: 'Strong',
        src: ImageSizeMap[props.size][0]
      },
      {
        key: 'Weak',
        src: ImageSizeMap[props.size][1]
      },
      {
        key: 'Weakest',
        src: ImageSizeMap[props.size][2]
      }
    ]);
  }

  onCollision() {
    const { env } = this.props;
    const { strength } = this.state;

    env.audioHandler.play('OnPoints');
    this.setState({ strength: strength - 1 }, (state) => {
      if (state.strength < 0) {
        // @todo how to handle this???
        this.disabled = true;
      }
    });
  }

  update() {
    const { x, y, width, height, env } = this.props;
    const { strength } = this.state;

    const image = this.assets[ImageStrengthMap[strength]];

    image &&
      CreateImage({
        ctx: env.ctx,
        image,
        x,
        y,
        width,
        height
      });
  }
}

export default Brick;
