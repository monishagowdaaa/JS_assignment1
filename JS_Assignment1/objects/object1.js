const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    }
  };
  
  
  console.log("Full name:", person.firstName + " " + person.lastName);  
  
  
  person.greet(); 
  
  
  person.age = 31;
  console.log("Updated age:", person.age);