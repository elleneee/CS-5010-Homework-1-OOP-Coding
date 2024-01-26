import PromptManager from "./PromptManager.js";

//Create a PromptManager instance
const myPromptManager = new PromptManager();

//Add instructions
myPromptManager.recordPrompt(
  "What coding paradigm is ES?",
  `ES can refer to different coding paradigms depending on the context. In the context of web development, ES often stands for ECMAScript, which is a scripting language specification that JavaScript follows. ECMAScript supports multiple programming paradigms, including:
  
  Imperative Programming: Writing code that specifies the steps the program must take to reach the desired state.
  
  Object-Oriented Programming (OOP): Organizing code into objects that encapsulate data and behavior.
  
  Functional Programming (FP): Treating computation as the evaluation of mathematical functions, avoiding changing-state and mutable data.
  
  JavaScript, as an implementation of ECMAScript, allows developers to use a combination of these paradigms based on their preferences and the requirements of the task at hand.`
);
myPromptManager.recordPrompt(
  "Aren't you forgetting a very important one?",
  `I apologize if I missed mentioning a specific coding paradigm. Please clarify which paradigm you are referring to, and I'll be happy to provide information about it.
  `
);
myPromptManager.recordPrompt(
  "What is imperative programming?",
  "Imperative programming is a programming paradigm that uses statements that change a program's state. In imperative programming, the focus is on describing how a program operates."
);

//Add DalleInteractions
myPromptManager.recordDalleInteraction(
  "What are pillars of OOP?",
  "The four pillars of Object-Oriented Programming (OOP) are: Encapsulation, Inheritance, Polymorphism, Abstraction.",
  "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BirtADeool-n8VNsXYAoZg.png"
);
myPromptManager.recordDalleInteraction(
  "What is declarative programming?",
  "Declarative programming is a programming paradigm that focuses on describing the desired result or outcome, rather than explicitly specifying the step-by-step instructions to achieve that result. In declarative programming, programmers define what they want the program to accomplish, leaving the details of how to accomplish it to the underlying system.",
  "https://www.ionos.com/digitalguide/fileadmin/_processed_/6/e/csm_programming-paradigms_6167737405.webp"
);

//Display all interactions
myPromptManager.showAllInteractions();
//Get DalleInteraction type
myPromptManager.showType(3);
//Modify response and display
myPromptManager.modifyResponse(0, "Modified response.");
myPromptManager.showInteraction(0);
//Delete interactions
myPromptManager.deletePrompt(1);
myPromptManager.deletePrompt(2);
//Display delete result
myPromptManager.showAllInteractions();