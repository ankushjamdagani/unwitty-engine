# Game

## Notes

- Offline and optimised
- Modes
  - Single
  - Double
  - Multiple
- Points
  - 1 point - Brick Hit
  - 2 points - Other Players out by direct hit
- Gems
  - Hidden in bricks
  - Flying coins
  - Quiz
    - theme based
    - preselected questions by other players

## For Read

- [Sprite Animation](https://www.kirupa.com/canvas/sprite_animations_canvas.htm)
- [Layering](https://developer.ibm.com/technologies/web-development/tutorials/wa-canvashtml5layering/)
- [Light Effects](https://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/) and [here](https://www.youtube.com/watch?v=fc3nnG2CG8U)
- [Eyes using Raytracing](https://stackoverflow.com/questions/32716685/algorithm-for-2d-raytracer)
- [Physics](https://courses.lumenlearning.com/boundless-physics/)

```MD
Game INit
    Load Resources
Add world as root
    Set world props like gravity, air friction, etc.
Add Scenes // Elements in a scene can interact with another
    Set Layer // canvass layer
    Add elements /and sub elements
Start Game
    ...
    onUpdate // examples
        setText()
        setVelocity()
        setRotation()
```

@todo

- Apply Forces to elements
- Remove/modify forces in realtime
