const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
  ];
  
  const result = users.map(function(user) {
    const name = user.name;
    const age = user.age;
    const status = age >= 18 ? "성인" : "미성년자";
  
    return {
      name: name,
      age: age,
      status: status
    };
  });
  
  console.log(result);
  