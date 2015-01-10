// Connect to a Meteor backend
var simpsonsBackend = new Asteroid("localhost:3000");

// Use real-time collections
simpsonsBackend.subscribe("theSimpsons");
var simpsons = simpsonsBackend.getCollection("simpsons");
simpsons.insert({
   name: "Barney",
   lastname: "Gumble"
});
// Get the task
var simpsonsList = simpsons.reactiveQuery({});
// Log the array of results
console.log(simpsonsList.result);
// Listen for changes
simpsonsList.on("change", function () {
  console.log(simpsonsList.result);
});