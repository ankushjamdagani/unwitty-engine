# Game

## Next Steps

- Time management - control speed, etc.
- time based movements
- user actions / events - channeling
  - data management from user's side
- multiple canvas support
  - zIndex and layerIndex
- offscreen canvas
- scenes / screens
- inactive node and inactive canvas
- add perspective

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
  - Speed of light
  - slow motion
  - load textures, fonts and all other assets in offscreen canvas - using rectangle packing system
  - render only changed areas of canvas - maybe use bounding box
  - ui layout system - resizing support
  - user events - click, hover, etc
  - post effects - explosion, particle system
  - blur, color grading, ...effects
  - scripting
  - [Optimizing_canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
  - [creating_html5_animations](https://cloudinary.com/blog/creating_html5_animations)

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

```MD
- WORLD
  - background, atmosphere, gravity, etc....
- Layer
- Poly Mesh
- Light
- FLUID
    - density
    - Friction
    - position
    ..etc.
- CONSTRAINT
- STYLES
- FORCES
    - Surface Friction
    - Fluid Friction
    - Gravity
    - Gravitational pull between bodies
    - CONSTRAINT
    - Magnetic behaviour

                    O[]
                    - CONSTRAINT
                        - Distance between childrens = 0
                    - STYLES
                        - Both of color red
                    - TRANSFORM
                    - Some Common props will get inherited
                        - Restitution
                        - Friction
                        - positional attributes
                    - Some won't
                        - mass would be sum of childrens or given exclusively to parent
                        _
                        _
                        _
                        _
        __Circle__                 __Rectangle__
```

@todo

- Apply Forces to elements
- Remove/modify forces in realtime

## Physics Notes

```js
    AABB Collision (when up direction is positive)

        Circle with circle -
        (r1 + r2)^2 > (x2-x1)^2 + (y2-y1)^2

        Rectangle with Rectangle -
        on x-axis
        L2 < R1 && L1 < R2 && B2 < T1 && B1 < T2
```
