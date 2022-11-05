# Whack a Professor 

## Graphics 

### Task List 

**Note**: Checked tasks indicate "in progress" or "completed" <br>
What needs to be included in a sprite sheet...
- Default Stage
- Hit Stage
- Won Game Stage
- Lost Game Stage 
<br>
These 4 stages must be divided into 4 groups within the aseprite format.

<ins>Sprite Sheet (pixel art style)</ins>
  * [x] Professor
  * [x] Student 
  * [x] Dean 
  * [x] Admin

<ins>UI</ins>
   * [ ] Cursor
   * [ ] Buttons
   * [ ] Scoreboard
   * [ ] Menu(s)

<ins>Other</ins>
   * [x] Sound Effects
   * [x] Background
   * [ ] Desk (Hole)

### Contributors Guide

1. Download LibreSprite or Aseprite (more info under Useful Links section).
2. Watch the pixel art tutorial (more info under Tutorials section).
3. Do your own research on color theory, and pixel art. (Highly recommended but not enforced)
4. Any graphic must be exported as a Scalable Vector Graphic (svg).
5. Use lots of references, check refs folder to see if there is references for your task. (Feel free to add your own references to the refs folder) <br>

**Sprite Sheets**
* Must be divided into 4 groups, 1 per stage.
* Each group/stagegroup/stage must have 4 distinct layers...
   * Head
   * Arms
   * Torso
   * Legs
* 25x48 pixels (WxH) per group <br>

**Background**
* Must not syphon attention from the action of the game.
   * No checkered pattern
   * No flashy colors
* 150x200 pixels (WxH)

### Useful Links
1. [Aseprite](https://github.com/aseprite/aseprite/blob/main/INSTALL.md) - sprite editing software built with c++, requires...
   * [CMake](https://cmake.org/download/) build automation tool (v3.16 or greater)
   * [Skia](https://github.com/aseprite/skia/releases) 
   * [Ninja](https://ninja-build.org/) build system 
   * Depending on your OS, you might need to install couple more dependencies. <br>
   More info at <https://github.com/aseprite/aseprite/blob/main/INSTALL.md>
2. [LibreSprite](https://libresprite.github.io/#!/) - free alternative to the original, forked version of Aseprite, doesn't require compilation. 

### Tutorials 
- [Pixel art tutorial](https://www.youtube.com/watch?v=lfR7Qj04-UA) 
- [Compiling Aseprite from source code](https://www.youtube.com/watch?v=82TIDyKjxuE)

## Specs
   - [Draft of Specs Document](https://docs.google.com/document/d/1DOg1KO-gd_Uh_9F1gvyWudXh33sDPnzyVeeTFYqNzb8/edit?usp=sharing)
   

## Backbone

### Task List

* [ ] Create a Start button
* [ ] Make a Game Over Screen
* [ ] Animate the "moles" & hammer
* [x] Create the Hammer
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
<br>
**Note**: Each of these links are to create the same game but provide different ways of going about things


## Quality Assurance
