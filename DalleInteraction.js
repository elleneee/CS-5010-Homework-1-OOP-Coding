import Interaction from "./Interaction.js";

class DalleInteraction extends Interaction{

  constructor(prompt, response, url){
    super(prompt, response);
    this.url = url; 
  }

  //Show DalleInteraction
  showInteraction(){
    console.log(`Prompt ${this.prompt.slice(0, 20)}... has response ${this.response.slice(0, 20)}... and image ${this.url}`);
  }

  //Show interaction type
  getType(){
    return "DalleInteraction";
  }
}

export default DalleInteraction;