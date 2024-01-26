class Interaction {

  constructor(prompt, response){
    this.prompt = prompt;
    this.response = response;
  }

  //display prompt and response of the interaction
  showInteraction(){
    console.log(`Prompt ${this.prompt.slice(0, 20)}... has response ${this.response.slice(0, 20)}...`);
  }

  //Show interaction type
  getType(){
    return "Interaction";
  }
}

export default Interaction;