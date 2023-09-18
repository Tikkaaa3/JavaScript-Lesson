const favouriteAnimal = "octopus";

switch(favouriteAnimal) {           // switch statements only try to check if some varibale is equal to other or not. 
  case "cat": 
  case "bobcat":
    console.log("nice choice");
    break;
  case "dog":
    console.log("why not?");
    break;
  case "shark":
    console.log("interesting!"); 
    break;
  default:
    console.log("Noo");
    break;
}