# CS-5010-Homework-1-OOP-Coding ![License](https://img.shields.io/badge/license-MIT-yellow)
This homework mainly contains four files, three for classes: `PromtManager.js`, `Interaction.js` and `DalleInteraction.js`, and one `main.js` for test.
## How to run 😎
Download code to local and run command `node main.js`.  
The terminal will show as below:  
<br/>![Result showed in terminal](https://github.com/elleneee/Images-cache/blob/cac4f7432d6ed921e935c6a3c7976980cf1895df/homework1%20result.png?raw=true)
<!--<br/><br/>**Result Explanaition:**    -->
### Result Explanaition:
In line 1 - 7 of the picture above, the `main.js` creates an instance of `PromptManager` , records, and prints five interaction including instances of `Interaction` and `DalleInteraction`.   
In line 8, it checks the type of the third interaction.  
In line 9, it modifies the response of the first interaction and prints it.  
In line 10 -14, it deletes two interactions and prints the rest.
## How to test 🧮
There are 6 functions you can test by call methods of class `PromptManager`:  
1. `recordPrompt()`: add instance of `Ineraction`.
2. `showAllInteractions()`: print all interactions by calling method `showInteraction()` of calss `Interaction` and `DalleInteraction`.
3. `modifyResponse()`: this is a new feature implemented myself, it can modify response of certain interaction.
4. `recordDalleInteraction()`: add instance of `DalleInteraction`.
5. `showType()`: print type of interaction.
6. `deletePrompt()`: delete certain interaction by index.
