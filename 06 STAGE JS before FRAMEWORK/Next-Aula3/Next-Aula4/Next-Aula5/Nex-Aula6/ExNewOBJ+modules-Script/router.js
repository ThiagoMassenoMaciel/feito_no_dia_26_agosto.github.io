class Router{
  sayHELLOW(n){
    alert("Execute the function from property into the variable of class Rounter :\nsayHELLOW "+ n)
  }
}

const rounter1 = new Router() ; // Its like there are one photograpy Of that class putting into this variable rounter1
//This process to take a picture from some class after the new 
//IS ESTANCIANDO UMA CLASSE = CONSTRUINDO O OBJETO COM A FOTO DA CLASSE Router 
//TAKE A PICTURE =    SAME THINGS INTO THE CLASS SCOPE equals THINGS into the scope NEW OBJECT 
const rounter2 = new Router() ;

//FOR THIS REASON NOW I HAVE ONE CLASS I  DONT NEED NYMORE ALWAYS REPEAT THE PORPERTIES each time e DECIDE TO CREATE A SAME KIND OF OBJECT
let n1 = 1, n2 = 2;

rounter1.sayHELLOW(n1);
rounter2.sayHELLOW(n2);

console.log("Run router.js");
console.log("\n\nSame\n\n")
console.log("type and value" , rounter1===rounter2)
console.log("value",rounter1==rounter2)


//#Herança 

alert("Herança in javaScript")
class Birds{
  
  fly(){
    alert("Can fly by classes Birds ")
  }

}

class Aveztruz extends Birds{
  constructor(){
    super()
  }
}

let animal = new Aveztruz();
console.log("A classe Aveztruz herdou o metodo fly da classe Birds")
animal.fly();
console.log("Object created : ",animal)
console.log(" method inheited : ",animal.fly)

class Pinguin extends Birds{
  constructor(){
    super()
  }

  fly(){
    alert("Cannot fly by poliformism from class Pinguin")
  }
}

let animal_2 = new Pinguin();

console.log("A classe Pinguin herdou o metodo fly da classe Birds\nE alterou fly() poliformismo")

animal_2.fly()

console.log("Polimorfism : multiple forms on same method / atribute inheited")
