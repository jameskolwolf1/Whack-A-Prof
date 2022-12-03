<img height=180 src="./src/graphics/banner/banner.svg" alt="banner">
<br>
<div align="center">

  <a href="">![Size](https://img.shields.io/github/repo-size/jameskolwolf1/Whack-A-Prof?color=%23a4dddb)</a>
  <a href="">![Contributors](https://img.shields.io/github/contributors/jameskolwolf1/Whack-A-Prof?color=%23d0da91)</a>
  <a href="">![LastCommit](https://img.shields.io/github/last-commit/jameskolwolf1/Whack-A-Prof?color=%23df84a5)</a>
  <a href="">![GithubStars](https://img.shields.io/github/stars/jameskolwolf1/Whack-A-Prof?style=social)</a>

</div>


Web browser based school themed whack-a-mole game where the "moles" are
the people you would typically find in a school! Built with HTML, CSS, JavaScript.
Class project, for 3140 Design and Implementation of Large Scale Applications at CUNY Brooklyn College.


**Naming Conventions** (For Contributors)
- Any folders/directories must be lowercase
- Any files that are *not* specification/documentation, should be named with lowercase letters. 
- Graphics files `*.svg`, `*.aseprite`, should use underscore instead of space, any other files could either 
use underscores or dashes instead of spaces in file names.

Naming conventions are general guidelines for convenience and uniformity of the project.

## Graphics

### Creative Direction
<img height=370 width=290 src="https://user-images.githubusercontent.com/92228287/204404701-ed0cee55-734d-41f3-85fd-d69c8e2d03fa.png" alt="character sprites">
<img height=370 width=290 src="https://user-images.githubusercontent.com/92228287/204407514-86aedf7e-505f-409e-9bc7-87d2bfb39859.png" alt="creative direction">

### Contributors Guide

1. Download LibreSprite or Aseprite (more info under Useful Links section).
2. Watch the pixel art tutorial (more info under Tutorials section).
3. Do your own research on color theory, and pixel art. (Highly recommended but not enforced)
4. Make sure to use the [ Apollo ](./src/graphics/apollo.hex) color palette.
5. Any graphic must be exported as a Scalable Vector Graphic (SVG).
6. Download PureRef, to be able to access/save reference files. 
7. Use lots of references, check refs folder to see if there is references for your task. (Feel free to add your own references to the refs folder) <br>
8. Please try to follow the creative direction as best as possible to fit into a uniform theme. 

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

_Character Sprite Sheet (pixel art style)_
   * [x] Professor
   * [x] Student
   * [x] Dean
   * [x] Admin

_UI_
   * [ ] Cursor/Hammer/Ruler
   * [ ] Buttons (Without text, but with pressed stage)
   * [x] Scoreboard
   * [ ] Key (Mapping Character to Graphic)
   * [ ] Title Screen Background
   * [x] Game Screen Background
   * [ ] Game Over Screen Background

_Other_
   * [x] Sound Effects
   * [x] Hole/Desk
   
_Decoration_ (For Game Screen)
   * [ ] Plants (2 different ones)
   * [ ] Pinboard
   * [ ] Static clock (?)

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


***Vision***
 
 Whack-A-Prof is a game that should be easily accessible to all users. The game should be 60 seconds long, its akin to Whack-A-Mole with the exception being that the "moles" are students, professors, deans, and admins. The entire setting takes place within a classroom with the "holes" being desks and the moles popping out from behind the desks. When whack a professor the user should be provided with a mallet that isn't a mallet but a ruler, or any kind of classroom item. When hitting a professor, dean or admin the score should be added,double or triple given which mole you hit but if a student is hit then points will be deducted  
 
***Current Updates***
* Holes have been added as a placeholer for the desk
* When pressing the start button the game begins 
* The scoreboard has been added
* Points are added and subtracted when mole is hit
* The moles have been updated
* The timer counts down to 37 seconds (This is for testing purposes)
* Moles have a reaction when hit with cursor


### Task List

* [x] Create a Start button
* [ ] Make a Game Over Screen
* [x] Animate the "moles" & hammer
* [ ] Create the Hammer
* [x] Make the Timer count down
* [x] Add points to hits
* [x] Enable Score Counter
* [x] Add Professor Mole
* [x] Add Dean Mole
* [x] Add Admin Mole
* [ ] Replace cursor
* [x] Enable hit reaction
* [x] Make sure cursor works


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

Testing entry date 11/30/22:
- aforementioned bugs are still present
- professor mole does not pop up when the game starts, it did appear during prelim testing [BUG]
- SVG image files are correctly uploaded into the repo. 
- Graphics assets are correctly uploaded into the repo, and appear to be nearly complete. Just to be implemented into mechanics.js and html file.

