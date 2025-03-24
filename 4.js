const jsonString = `
[
  { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]
`;

const parsed = JSON.parse(jsonString);

const result = parsed.map(function(item) {
  return {
    id: item.id,
    name: item.name,
    age: item.age
  };
});

console.log(result);
