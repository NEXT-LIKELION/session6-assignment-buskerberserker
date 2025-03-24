const person = {
    name: "David",
    city: "London",
    age: 30
  };
  
  for (let key in person) {
    if (typeof person[key] === "string") {
      person[key] = person[key] + " (확인됨)";
    }
  }
  
  const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
  const filtered = [];
  
  for (let word of words) {
    if (word.length >= 5) {
      filtered.push(word);
    }
  }
  
  console.log(person);
  console.log(filtered);
  