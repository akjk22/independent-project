# _Arrays & Looping Independent Project_

#### _This project will receive a number and return a list of values based on different rules and behaviors, 02/05/2020_

#### By _**Andrew Kim**_

## Description

_This program will receive any number in an input field that a user fills out. The user will see a returned range of numbers starting from 0, all the way up to the number inputted. The results will be displayed in a new paragraph, within a hidden div, below the submit button. Based on the specs, the values returned may differ. Some numbers have be replaced with a specific string, as detailed in the specs._

## Specs

* _The program returns a range of numbers from 0 to the users inputted number_
  * _input_: "0"
  *_output_: "0,1,2,3,4"

* _Numbers that contain a 1 (unless it also has a 2 or 3 - "1" has the least precedence) will replace the number with a string "Beep!"_
  * _input_: "51"
  * _output_: "Beep!"

* _Numbers that contain a 2 (unless it also has a 3 - "2" has the second highest precedence) will replace the number with a string "Boopp!"_
  * _input_: "52"
  * _output_: "Boop!"

* _Numbers that contain a 2 (unless it also has a 3 - "3" having the highest precedence in behavior) will replace the number with a string "Boopp!"_
  * _input_: "123"
  * _output_: "I'm sorry, Dave. I'm afraid I can't do that!"

* _With each number inputted, the user should see new results over and over again_
  * _input 1_: "3"
  * _output 1_: "0", "Beep", "Boop", "I'm sorry Dave. I'm afraid I can't do that!"
  * _input 2_: "5"
  * _output 2_: "0", "Beep", "Boop", "I'm sorry Dave. I'm afraid I can't do that!, 4, 5"
* _There will also be secret numbers revealing an image, text, and animation_



## Setup/Installation Requirements

* _Git clone repo https://github.com/akjk22/independent-project.git_
* _In the VS Code CLI use "open index.html" to view the project in the browser_
* _Or view on gh-pages: https://akjk22.github.io/independent-project/_

## Support and contact details

_If you run into issues with the code email me at andrewswkim47@gmail.com_

## Technologies Used

_HTML, CSS, Javascript, JQuery_

### License

_This project is licensed under the MIT License_

Copyright (c) 2016 **_Andrew Kim_**