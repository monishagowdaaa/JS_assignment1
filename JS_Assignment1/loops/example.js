
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i); 
  }
  
  
  let count = 0;
  while (count < 3) {
    console.log("Count:", count); 
    count++;
  }
  
  
  let j = 0;
  do {
    console.log("do-while:", j); 
  } while (j > 0); 
  
  
  const person = { name: "Alice", age: 30 };
  for (const key in person) {
    console.log(key, person[key]); 
  
  }
  
  
  const fruits = ["apple", "banana", "orange"];
  for (const fruit of fruits) {
    console.log(fruit); 
  }