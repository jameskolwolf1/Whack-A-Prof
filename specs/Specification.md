# Specification Document for Whack-A-Prof

## **Table of Contents**
### [**1. Introduction**](#introduction)

[1.1: Purpose](#Purpose)

[1.2: Document Conventions](#Document-Conventions)

[1.3: Intended Audience](#Intended-Audience)

[1.4: Product Scope](#Product-Scope)

[1.5: References](#References)

### [**2. Overall Description**](#Overall-Description)

[2.1: Product Perspective](#Product-Perspective)

[2.2: Product Functions](#Product-Functions)

[2.3: User Classes and Characteristics](#User-Classes-and-Characteristics)

[2.4: Operating Environment](#Operating-Environment)

[2.5: Design and Implementation Constraints](#Design-and-Implementation-Constraints)

[2.6: User Documentation](#User-Documentation)

[2.7: Assumptions and Dependencies](#Assumptions-and-Dependencies)


## **1. Introduction** <a name="introduction"></a>
---
### **1.1: Purpose** <a name="Purpose"></a>
This document represents the Software Requirements Specification (SRS) for Whack-A-Prof. It is designed to specify the procedures our teams, backbone, quality assurance, specification documentation, and graphics, have used in the development process and describe the requirements specifications for our application with respect to end users. It will provide a detailed overview of our software product’s goals and parameters.

### **1.2: Document Conventions** <a name="Document-Conventions"></a>

When going through the final version of the document, specific typographical conventions are implemented to make the consumption of this document’s information easier for you. When sentences or phrases are **bolded** or <ins>underlined</ins>, it usually means that there is a change in topic. In other instances **bolded** words or phrases are used to emphasize something important that the reader must keep in mind. Headers are used to indicate the topic that will be discussed in each section. When a sentence or word is surrounded by “quotations” the sentence or word is from a source or an idea that is not originally ours. Bullet points, or lists, are used to easily list information in order to avoid confusing paragraphs. Lines and dividers in the document are used to have further organization of information for the reader to easily see when a section starts and ends. Finally, any links provided in the document are there to show what it is that we are referencing and where the outside sources we use come from. The only other time you will see a link that does not do this is in the table of contents.

### **1.3: Intended Audience** <a name="Intended-Audience"></a>

This SRS is organized into 4 sections, each with varying subsections. The document is intended for both technical and non-technical audiences, such as developers, users, testers, and documentation writers. All readers should start with the **Introduction** and **Overall Description** to get a sense of the purpose and scope of the product. Users should follow the User Documentation (subsection 2.6) which will give a general tutorial on how to use the product. Section 3: **External Interface Requirements** and Section 4: **System Features** are intended for developers, testers, and documentation writers. These two sections will give specific details on the software features of the product itself.

### **1.4: Product Scope** <a name="Product-Scope"></a>
The skeleton of the project will be created using the scripting language of Javascript. The goal with Javascript, in correspondence to the project, is to create the bare minimum functions of a “Whack-A-Prof” game. Javascript will be responsible for signifying the space in which the game will take place, animating the pictures that will represent the characters and the cursor, buttons, etc. that the user will be using to interact with the game. Additionally, Javascript will be giving these characters value, allowing the user to feel a form of interaction with said characters by gaining or losing points based on what character they have interacted with. The space and structure that the game will be developed in will be created by HTML. HTML will display the game on a web browser and create containers and borders in which the buttons, characters, and other visual blocks will be placed in. Moreover, while HTML will be able to visually show the user the game, CSS will further assist HTML in giving better visual effects to the web browser. On the other hand, Aseprite and LibreSprite will be used to create the visuals of the characters. Both programs are sprite and pixel art editing tools. Moreover Skia, a 2D graphics library, Ninja, a build system, and CMake, a open source software which generates a system’s build file, will be used by the design team to assist in the designing of the characters. Finally, GitHub and the SVN service provided by GitHub is used by everyone in the team in order to keep programs, pictures, documents, and other forms of files in one organized and accessible setting.

### **1.5: References** <a name="References"></a>
All references in this documentation will be referred to the items below.

**Template for documentation**:

* [1] K.E. Wiegers, "Software Requirements Specifications for <Project>", 1999. [Online].
	 Available: https://web.cs.dal.ca/~hawkey/3130/srs_template-ieee.doc.

* [2] IEEE Standards Association (2011, Lass Accessed October 2022) Systems and software engineering – 
	Life cycle processes – Requirements engineering, Standard. (IEEE 29148-2011) 
	Available: http://standards.ieee.org/findstds/standard/29148-2011.html.

**Connecting Github with SVN**:

* [3] "Support for subversion clients," GitHub Docs. [Online]. Available:
	https://docs.github.com/en/get-started/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients. 
	[Accessed: 29-Oct-2022].

**Graphics**:

* [4] *CMake*. (Version 3.25). Kitware. [Online]. Available:  https://cmake.org/

* [5] *Aseprite: Animated sprite editor & pixel art tool (Windows, macOS, Linux)*.
	(Version 1.2.40). Igara Studio. [Online]. GitHub. Available: https://github.com/aseprite/aseprite

* [6] D. Capello. *Skia*. (Version Skia-m102). Igara Studio. [Online]. GitHub. 
	Available: https://github.com/aseprite/skia/

* [7] E. Martin, J. N. Hasse. *Ninja-build*. (Version 1.11.1). J. N. Hasse. [Online]. GitHub. 
	Available: https://github.com/ninja-build/ninja

* [8] D. Capello. *LibreSprite*. (Version 1.0). Igara Studio. [Online[. GitHub.
	Available: https://libresprite.github.io/#!/


**Backbone**:

* [9] T. Berners-Lee. *HTML*. (Version HTML5). [Programming Language]. World Wide Web Consortium. 
	Available: https://www.w3schools.com/html/

* [10] H. W. Lium. *CSS*. (Version 2.1). [Programming Language]. World Wide Web Consortium. 
	Available: https://www.w3schools.com/css/

* [11] B. Eich. *JavaScript*. (Version ES2022). [Programming Language]. Oracle Corporation. 
	Available: https://developer.oracle.com/languages/javascript.html


## **2. Overall Description** <a name="Overall-Description"></a>
---
### **2.1: Product Perspective** <a name="Product-Perspective"></a>

This product is a new “Whack- A-Mole” inspired game where the functions are the same but the settings are altered. Instead of moles, the user will interact with school faculty and students to accumulate or depress points. The following are features included with the web game:

- Cross Platform Support: The game is supported by most of the popular web browsers that can be downloaded in most operating systems

- Number of users who can be on the website: While an exact number can not be given a sizeable amount of users can go on the website at the same time to play the game

- Storing Scores of User: The website will be utilizing the user's local storage in order to keep track of their individual scores


### **2.2: Product Functions** <a name="Product-Functions"></a>

The product must provide, at a minimum, the following functions to the users within this SRS document.
* Provide a User Interface (UI) to play the game
* Make data/scores available in local storage
* Allow users to click the “Start Game” button when first launching the application and also after finishing a game to play another game

### **2.3: User Classes and Characteristics** <a name="User-Classes-and-Characteristics"></a>

Users of the product should have basic knowledge of web technology and operating the internet. The user interface will be friendly enough to guide the user and help with starting the Whack-A-Prof game.

### **2.4: Operating Environment** <a name="Operating-Environment"></a>

The server-side components of the software system can operate on any operating system, including but not limited to Linux, Windows, and macOS. The client-side components of the software system must operate within common web browser environments. The minimum set of browsers that must be supported is:

- Google Chrome 44+

- Apple Safari 7+

- Microsoft Internet Explorer 10+

- Mozilla Firefox 40+

### **2.5: Design and Implementation Constraints** <a name="Design-and-Implementation-Constraints"></a>

### **2.6: User Documentation** <a name="User-Documentation"></a>

### **2.7: Assumptions and Dependencies** <a name="Assumptions-and-Dependencies"></a>
The game can mainly be played on web browsers such as Firefox, Chrome, and Edge. The user must access on a desktop. If the game is accessed through other devices or browsers, the game may bug or become unplayable. Users who play this game is assumed to have access to a usable web browser and know how to use the internet and input components, such as the mouse. 


---
