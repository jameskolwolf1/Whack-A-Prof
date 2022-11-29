# Whack a Professor
Web browser based school themed whack-a-mole game where the "moles" are 
the people you would typically find in a school! Built with HTML, CSS, JavaScript.
Class project, for 3140 Design and Implementation of Large Scale Applications at CUNY Brooklyn College.

## Graphics

### Creative Direction
<img height=370 width=290 src="https://user-images.githubusercontent.com/92228287/204404701-ed0cee55-734d-41f3-85fd-d69c8e2d03fa.png" alt="character sprites">
<img height=370 width=290 src="https://user-images.githubusercontent.com/92228287/204407514-86aedf7e-505f-409e-9bc7-87d2bfb39859.png" alt="creative direction">

### Contributors Guide

1. Download LibreSprite or Aseprite (more info under Useful Links section).
2. Watch the pixel art tutorial (more info under Tutorials section).
3. Do your own research on color theory, and pixel art. (Highly recommended but not enforced)
4. Make sure to use the [ Apollo ](apollo.hex) color palette (Found in the graphics folder).
5. Any graphic must be exported as a Scalable Vector Graphic (SVG).
6. Download PureRef, to be able to access/save reference files. 
7. Use lots of references, check refs folder to see if there is references for your task. (Feel free to add your own references to the refs folder) <br>
8. Please try to follow the creative direction as best as possible to fit into a uniform theme. 

<ins>Naming Conventions</ins> 
- Any folders/directories must be lowercase
- Any files that are *not* specification/documentation, should be named with lowercase letters. 
- Graphics files such as .svg, .aseprite, should use underscore instead of space, any other files could either 
use underscores or dashes instead of spaces in file names. <br>
Naming conventions are neccesary for easier retrieval of files in the terminal. And it makes the project look uniform.  

**Character Sprite Sheets**

* Must be divided into 4 groups, 1 per _stage_.
   * Default Stage
   * Hit Stage
   * Won Game Stage
   * Lost Game Stage

* Must produce the following exported files...
   * (name of your character).svg
   * (name of your character)\_hit.svg
   * (name of your character)\_lose.svg
   * (name of your character)\_win.svg

* Each _group/stage_ must have at least 4 distinct layers...
   * Head
   * Arms
   * Torso
   * Legs
* 32x48 pixels maximum (WxH) per group <br>

**Background**

* Must not syphon attention from the action of the game.
   * No checkered pattern
   * No flashy colors

* Must provide sufficient space for... 
   * 9 desks + character sprite
   * Scoreboard

* 162x208 pixels (WxH)

### Task List

**Note**: Checked tasks indicate "in progress" or "completed" <br>

<ins>Character Sprite Sheet (pixel art style)</ins>
   * [x] Professor
   * [x] Student
   * [x] Dean
   * [x] Admin

<ins>UI</ins>
   * [ ] Cursor/Hammer/Ruler
   * [ ] Buttons
   * [x] Scoreboard
   * [ ] Menu(s)

<ins>Other</ins>
   * [x] Sound Effects
   * [x] Background
   * [x] Hole/Desk
   
<ins>Decoration</ins>
   * [ ] Plants(2 different ones)
   * [ ] Pinboard
   * [ ] Clock (?)

### Useful Links

1. [Aseprite](https://github.com/aseprite/aseprite/blob/main/INSTALL.md) - sprite editing software built with c++, requires...
   * [CMake](https://cmake.org/download/) build automation tool (v3.16 or greater)
   * [Skia](https://github.com/aseprite/skia/releases)
   * [Ninja](https://ninja-build.org/) build system
   * Depending on your OS, you might need to install couple more dependencies. <br>
   More info at <https://github.com/aseprite/aseprite/blob/main/INSTALL.md>
2. [LibreSprite](https://libresprite.github.io/#!/) - free alternative to the original, forked version of Aseprite, doesn't require compilation.
3. [PureRef](https://www.pureref.com/) - Image referencing tool.

### Tutorials

- [Pixel art tutorial](https://www.youtube.com/watch?v=lfR7Qj04-UA)
- [Compiling Aseprite from source code](https://www.youtube.com/watch?v=82TIDyKjxuE)
- [Perspective in Art](https://youtube.com/watch?v=-5QIiubr10g&feature=share)

## Specs

   - [Draft of Specs Document](https://docs.google.com/document/d/1DOg1KO-gd_Uh_9F1gvyWudXh33sDPnzyVeeTFYqNzb8/edit?usp=sharing)
   - [Final Specification Document](https://github.com/jameskolwolf1/Whack-A-Prof/blob/master/specs/Specification.md)
   - [Specs Meeting Notes](https://docs.google.com/document/d/1XbE8pGKsK0rzentlyrCWgsmAW3bbj-xNH5FTtusvgMc/edit?usp=sharing)

## Backbone

### Task List

* [ ] Create a Start button
* [ ] Make a Game Over Screen
* [ ] Animate the "moles" & hammer
* [ ] Create the Hammer
* [ ] Make the Timer count down
* [ ] Add points to hits
* [ ] Enable Score Counter
* [ ] Add Professor Mole
* [ ] Add Dean Mole
* [ ] Add Admin Mole
* [ ] Replace cursor
* [ ] Enable hit reaction
* [ ] Make sure cursor works


### Resources

* [Whack-A-Mole Game - HTML, CSS, and JavaScript](https://www.youtube.com/watch?v=b20YueeXwZg&t=915)
* [How to create Whac a Mole Javascript Game](https://www.youtube.com/watch?v=UnrtgpQlAz4&t=2470)
* [Make a Whack A Mole Game with Vanilla JS](https://www.youtube.com/watch?v=toNFfAaWghU&t=690s)
* [Add a start and game over screen to JavaScript Pong](https://www.youtube.com/watch?v=8_zUEh7Vqhs&t=76s)

**Note**: Each of these links are to create the same game but provide different ways of going about things


## Quality Assurance

Preliminary testing: (nothing too serious) 11/11/22 
-  Start button works
-  Hammer works
-  Timer works
-  Score counter works
-  Mole works
-  Cursor works
-  Hit reaction works
-  Game over screen works
-  Game does not restart [BUG]: pressing game over does not restart the game. (Most likely just unfinished
   nothing too serious)
-  Timer a bit too close to start button, looks a bit jarring. [BUG]
- The app does not crash but when resizing the window, the game does not resize with it. [BUG]. Elements where 
   the professor appears will disappear when the window becomes too small. 
- Overall nothing game breaking during preliminary testing. Quirks and bugs are expected at this stage.


