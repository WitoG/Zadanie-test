fetch("https://randomuser.me/api/?results=10").then(response =>
  response.json()
);
console.log(json);
