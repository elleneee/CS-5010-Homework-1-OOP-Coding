import Interaction from "./Interaction.js";
import DalleInteraction from "./DalleInteraction.js";

class PromptManager {
  interactions = [];

  //New feature: Modify response
  modifyResponse(i, response){
    if(i > this.interactions.length - 1){
      console.log(`Interaction ${i} does not exist`);
      return;
    }
    this.interactions[i].response = response;
  }

  //Add new DalleInteraction
  recordDalleInteraction(prompt, response, url){
    const interact = new DalleInteraction(prompt, response, url);
    this.interactions.push(interact);
  }

  //Show interaction's type
  showType(i){
    if(i > this.interactions.length - 1){
      console.log(`Interaction ${i} does not exist`);
      return;
    }
    this.interactions[i].getType();
    console.log(`Interaction ${i} is ${this.interactions[i].getType()}`);
  }

  //Delete one interaction by index i
  deletePrompt(i){
    if(i > this.interactions.length - 1){
      console.log(`Interaction ${i} does not exist`);
      return;
    }
    this.interactions.splice(i, 1);
  }

  //Add new interaction
  recordPrompt(prompt, response){
    const interact = new Interaction(prompt, response);
    this.interactions.push(interact);
  }

  //Display all interactions
  showAllInteractions(){
    console.log("***Interactions:");
    this.interactions.forEach((interaction) => {
      interaction.showInteraction();
    });
  }

  //Display the ith interaction
  showInteraction(i){
    if(i > this.interactions.length - 1){
      console.log(`Interaction ${i} does not exist`);
      return;
    }
    this.interactions[i].showInteraction();
  }
}

export default PromptManager;