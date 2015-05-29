/* Author: André Roberge
   License: MIT
 */

/*jshint browser:true, devel:true, white:false, plusplus:false */

/**  Note: the English translation serve two purpose:
     1. to provide a model to follow for other languages
     2. to have strings that can take some parameters that are replaced at run-time.

*/

var RUR = RUR || {};

RUR.translation = {};
RUR.translation_to_english = {};


// required for object-handling functions e.g. take(object), put(object)
RUR.translation.triangle = "triangle";
RUR.translation.star = "star";
RUR.translation.square = "square";
RUR.translation.token = "token";
RUR.translation_to_english["star"] = "star";
RUR.translation_to_english["square"] = "square";
RUR.translation_to_english["triangle"] = "triangle";
RUR.translation_to_english["token"] = "token";


// in rur_utils.js
RUR.translation["# 'from my_lib import *' in Python Code is required to use\n# the code in this library. \n\n"] =
    "# 'from my_lib import *' in Python Code is required to use\n# the code in this library. \n\n";
RUR.translation.move = "move";
RUR.translation["Python Code"] = "Python Code";
RUR.translation["Javascript Code"] = "Javascript Code";
RUR.translation["CoffeeScript Code"] = "CoffeeScript Code";


// in recorder.js
RUR.translation["Too many steps:"] = "Too many steps: {max_steps}";
RUR.translation["<li class='success'>Reeborg is at the correct x position.</li>"] = "<li class='success'>Reeborg is at the correct x position.</li>";
RUR.translation["<li class='failure'>Reeborg is at the wrong x position.</li>"] = "<li class='failure'>Reeborg is at the wrong x position.</li>";
RUR.translation["<li class='success'>Reeborg is at the correct y position.</li>"] = "<li class='success'>Reeborg is at the correct y position.</li>";
RUR.translation["<li class='failure'>Reeborg is at the wrong y position.</li>"] = "<li class='failure'>Reeborg is at the wrong y position.</li>";
RUR.translation["<li class='success'>All objects are at the correct location.</li>"] = "<li class='success'>All objects are at the correct location.</li>";
RUR.translation["<li class='failure'>One or more objects are not at the correct location.</li>"] = "<li class='failure'>One or more objects are not at the correct location.</li>";
RUR.translation["<li class='success'>All walls have been built correctly.</li>"] = "<li class='success'>All walls have been built correctly.</li>";
RUR.translation["<li class='failure'>One or more walls missing or built at wrong location.</li>"] = "<li class='failure'>One or more walls missing or built at wrong location.</li>";
RUR.translation["Last instruction completed!"] = "Last instruction completed!";
RUR.translation["<p class='center'>Instruction <code>done()</code> executed.</p>"] = "<p class='center'>Instruction <code>done()</code> executed.</p>";


// in control.js
RUR.translation["Unknown object"] = "Unknown object: {obj}";
RUR.translation["No object found here"] = "No {obj} found here!";
RUR.translation["object"] = "object";
RUR.translation["I don't have any object to put down!"] = "I don't have any {obj} to put down!";
RUR.translation["There is already a wall here!"] = "There is already a wall here!";
RUR.translation["Ouch! I hit a wall!"] = "Ouch! I hit a wall!";
RUR.translation["I am afraid of the void!"] = "I am afraid of the void!";
RUR.translation["Done!"] = "Done!";  // and recorder.js
RUR.translation["There is no position as a goal in this world!"] = "There is no position as a goal in this world!";
RUR.translation["There is no goal in this world!"] = "There is no goal in this world!";


// in robot.js (and possibly others)
RUR.translation.east = "east";
RUR.translation.north = "north";
RUR.translation.west = "west";
RUR.translation.south = "south";
RUR.translation["Unknown orientation for robot."] = "Unknown orientation for robot.";


// in ui.js
RUR.translation["World selected"] = "World {world} selected";
RUR.translation["Could not find world"] = "Could not find world {world}";
RUR.translation["Object names"] = " my_lib, token, star, triangle, square, etc.";


// in doc_ready.js
RUR.translation["Invalid world file."] = "Invalid world file.";


// in world_editor.js
RUR.translation["Click on world to move robot."] = "Click on world to add or remove possible starting positions for Reeborg.";
RUR.translation["Added robot."] = "Added Reeborg.";
RUR.translation["Click on image to turn robot"] = "Click on image to turn Reeborg";
RUR.translation["Robot now has tokens."] = "Reeborg now has {x_tokens} tokens.";
RUR.translation["Click on world to add object."] = "Click on world to set number of {obj} (use a-b to indicate random integer values from a to b inclusively).";
RUR.translation["Click on desired object below."] = "Click on desired object below.";
RUR.translation["Click on world to toggle walls."] = "Click on world to toggle walls.";
RUR.translation["Click on world to set home position for robot."] = "Click on world to add/remove possible final positions for robot.";
RUR.translation["Click on world to toggle additional walls to build."] = "Click on world to toggle additional walls to build.";
RUR.translation["Click on desired goal object below."] = "Click on desired goal object below.";
RUR.translation["Click on world to set number of goal objects."] = "Click on world to set number of goal {obj}; use a specific number or 'all'.";
RUR.translation["Click on world at x=1, y=1 to have no object left as a goal."] = "Click on world at x=1, y=1 to confirm having no object left in the entire world as a goal.";
RUR.translation["Enter number of tokens for robot to carry (use inf for infinite number)"] = "Enter number of tokens for Reeborg to carry (use 'inf' for infinite number or a-b to indicate random integer values from a to b inclusively)";
RUR.translation[" is not a valid value!"] = " is not a valid value!";
RUR.translation["Goal: no object left in world."] = "Goal: no object left in world.";
RUR.translation["Enter number of objects desired at that location."] = "Click on world to set number {obj}; (use a-b to indicate random integer values from a to b inclusively).";
RUR.translation["Objects found here:"] = "Objects found here:";
RUR.translation["Description"] = "Description";
RUR.translation["A robot located here carries no objects."] = "A robot located at {x},{y} carries no objects.";
RUR.translation["Goal to achieve:"] = "Goal to achieve:";
RUR.translation["Note: no object must be left in this world at the end of the program."] = "Note: no object must be left in this world at the end of the program.";
RUR.translation["A robot located here carries:"] = "A robot located at {x},{y} carries:";
RUR.translation["random location"] = "random location";
RUR.translation["Enter number of objects to give to robot."] = "Enter number of {obj} to give to robot."
RUR.translation["Special information about this location:"] = "Special information about this location:";
RUR.translation["Click on world to toggle tile."] = "Click on world to toggle {tile} tile.";
RUR.translation["Click on desired tile below."] = "Click on desired tile below.";
RUR.translation["mud"] = "mud";
RUR.translation["water"] = "water";
RUR.translation["grass"] = "grass";
RUR.translation["gravel"] = "gravel";
RUR.translation["ice"] = "ice";


// in storage.js
RUR.translation["Name already exist; confirm that you want to replace its content."] = "Name already exist; confirm that you want to replace its content.";
RUR.translation["No such world!"] = "No such world!";
RUR.translation["Enter world name to save"] = "Enter world name to save";
RUR.translation["Enter world name to delete"] = "Enter world name to delete";


// in runner.js
RUR.translation["Error found at or near line {number}."] = "Error found at or near line {number}.";
RUR.translation["<br>Perhaps a missing colon is the cause."] = "<br>Perhaps a missing colon is the cause.";
RUR.translation["<br>Perhaps you forgot to add parentheses ()."] = "<br>Perhaps you forgot to add parentheses ().";
RUR.translation["<br>Perhaps you misspelled a word or forgot to define a function or a variable."] = "<br>Perhaps you misspelled a word or forgot to define a function or a variable.";


// in images.js
RUR.translation["I'm stuck in mud."] = "I'm stuck in mud.";
RUR.translation["Mud: Reeborg <b>cannot</b> detect this and will get stuck if it moves to this location."] = "Mud: Reeborg <b>cannot</b> detect this and will get stuck if it moves to this location.";
RUR.translation["I'm slipping on ice!"] = "I'm slipping on ice!";
RUR.translation["Ice: Reeborg <b>cannot</b> detect this and will slide and move to the next location if it moves to this location."] = "Ice: Reeborg <b>cannot</b> detect this and will slide and move to the next location if it moves to this location.";
RUR.translation["Grass: usually safe."] = "Grass: usually safe.";
RUR.translation["Gravel: usually safe."] = "Gravel: usually safe.";
RUR.translation["I'm in water!"] = "I'm in water!";
RUR.translation["Water: Reeborg <b>can</b> detect this but will drawn if it moves to this location."] = "Water: Reeborg <b>can</b> detect this but will drawn if it moves to this location.";
RUR.translation["green_home_tile: Reeborg <b>can</b> detect this tile using at_goal()."] = "green_home_tile: Reeborg <b>can</b> detect this tile using at_goal().";
