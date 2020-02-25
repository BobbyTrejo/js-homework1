  /*
  ============================================================================
                                Data Types
  ============================================================================  
  */

  // List data types in javascript below
  // 1) strings
  // 2) booleans
  // 3) arrays 
  // 4) objects
  // 5) int's     
  // 6) floats        


  /*
  ============================================================================
                                Variables
  ============================================================================  
  */

// What are the three ways to instantiate a variable? explain when youd use each one!

// 1) var - defines a variable globally, or locally to an entire function

// 2) let - declares variable that is limited to a scope of a block statement/expression on which it is used

// 3) const - the variable identifier cannot be reassigned. The object's contents (e.g., its properties) can be altered.


// Instantiate and assign a value that could change through out an application
let weather = "Sunny";

// Instantiate and assign a value that CAN NOT change through out an application
  const joeyDogObject = {
    firstName: "Joey",
    lastName: "The Dog",
    favoriteFoods: ["Pancakes", "Whipped cream", "Chicken", "Dog treats"],
    hobbies: ["Eating", "Sleeping", "Growling at Children"],
    enemies: {
      animal: "Squirrel"
    },
    likesBellyRubs: true,
    age:5
  }

// Instantiate and assign a value that could be accessed through out an entire application
  var a = 65;

// Instantiate and assign your favorite sport to a favoriteSport variable
  let favoriteSport = "Football";

// Instantiate and assign your favorite sport to a favoriteWeekDay variable
  let favoriteWeekDay = "Sunday";

// use string concatencacion to build the following sentence: I cant wait to watch <favoriteSport> on <favoriteWeekDay> and print the result 
console.log(
  "I can't wait to watch " + favoriteSport + " on " + favoriteWeekDay + "!"
);

// Now use interpolation to build that same sentence and print the result
console.log(`I cant wait to watch ${favoriteSport} on ${favoriteWeekDay}!`);

  /*
  ============================================================================
                                Arrays
  ============================================================================  
  */

  // Create an array with 5 of your favorite songs inside.
  let favSongs = ["last resort", "blood brothers", "lip gloss & black", "bleeding mascara", "before i forget"]

  //What data types are the items in your array? 
  /String data types are the items in my array.

  // Loop through that array and print each item to the console. (I want you to do this using an array method so feel free to use google!)
  for (var i = 0; i < favSongs.length; i++) {
    console.log(favSongs[i]);
    }

  // Now loop through that array and if a song in your array matches the song: "Habit" print "Match Found!" else print "No matches here!" this is getting into conditional statements so again feel free to use google to help you out!
  favSongs.forEach((song) => {
    if(song === "Habit"){
      console.log(song, "Match Found!")
    }else{
      console.log(song, "No matches here!")
    }
  })

  /*
  ============================================================================
                                Objects
  ============================================================================  
  */

  // Look at the following object:

  const jordanObject = {
    firstName: "Jordan",
    lastName: "Rosas",
    favoriteFoods: ["Rice and beans", "Pot stickers", "Pizza", "Chicken", "steak"],
    hobbies: ["Coding", "Learning languages", "Playing the cello", "Working out"],
    pets: {
      cat: "Hamilton"
    },
    likesTomatoes: false,
    age:22
  }

  // List below all the data types you see in the object above:
  // 1) object
  // 2) string
  // 3) array
  // 4) boolean
  // 5) int

  // add any property you'd like to the jordanObject using object dot notation 
  jordanObject.hasTattoos = true

  // print out jordanObject favorite foods: hint: look at what kind of collection that is. any useful methods? :)
  console.log(jordanObject.favoriteFoods)

  // print out the jordanObject pets name
  console.log(jordanObject.pets.cat)

  // Create an object that represents some fun facts about yourself, using Dwayne The Rock Johnson as an example.
  const bobbyObject = {
    firstName: "Bobby",
    lastName: "Trejo",
    favoriteFoods: ["Pizza", "Nachos", "Chicken quesadilla"],
    hobbies: ["Exercising", "Learning to code", "Watching youtube"],
    favoriteColor: "red",
    likesChocolate: true,
  }

  // Print your full name to the console.
  console.log(bobbyObject.firstName + bobbyObject.lastName)

  // Print your favorite color to the console.
  console.log(bobbyObject.favoriteColor)

  // Add a property of 'eyeColor', then log it to the console.
  bobbyObject.eyeColor = "brown"
  console.log(bobbyObject.eyeColor)

  // Loops over your array of hobbies, and print each one to the console.
  bobbyObject.hobbies.forEach((hobby) => {
    console.log(hobby)
  })