//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const { words } = require("lodash")


/*
I: Takes in an object
O: Return its value in an array
C: NA
E: NA
*/

function objectValues(object){
 // use object.values to return object values in an array
    return Object.values(object)
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an object
O: Returns all of it's keys in a string each separated by a space
C:
E:
*/

function keysToString(object) {
// use object.keys to return keys
// use join to bring the keys together into one string with a space
return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an Object
O: Returns all of the values in a string into one string
   Each separated by a space
C: No Booleans
E:
*/

function valuesToString(object) {
 // use an empty string the hold new string
   let result = "";
 // iterate though each key in the object
   for(let key in object){
  // check to see if the value is a string
      if(typeof object[key] === 'string'){
     // if result is not the first value ad a space    
         if (result) result += " "
      // adding each value to the string   
         result += object[key]
      }
   }

 // returnt the final concatenated string
return result;
  
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in one argument
O: Return 'array' if argument is an array
   Return 'object' if argument is an object
C:
E:
*/

function arrayOrObject(collection) {
   // check to see if argument is an array
   if(Array.isArray(collection)){
   // if argument is an array return 'array'
      return 'array' 
   }
   // check to ss if argument is an object
   // null will also return 'object' so make sure it is not equal to null
   else if (typeof collection === 'object' && collection !== null){
      // if argument is a collection return 'object'
      return 'object'
   }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in a string of one word
O: Return the string with the first letter capitalized
C:
E:
*/

function capitalizeWord(string) {
    // use charAt at the first position to make the first letter uppercase
   // concatenate to bring the string together
    // use slice at the second position to keep the rest of the string lowercase
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in a string of words
O: Returns a string with the first letter of all the words capitalized
C:
E:
*/


// split splits string into individual strings in an array including empty space
// join brings the strings in the array back to a string

function capitalizeAllWords(string) {
  // slit the strings into words in an array
  words = string.split(' ')
   // iterate through the array
  for(let i = 0; i < words.length; i++){
   // if element is greater than 0 - forgets about the empty spaces
   if(words[i].length > 0){
      // make first letter of each iteration uppercase and the rest of the word lowercase
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
   }
  }
   // join the words in the array back to a string
   return words.join(' ')
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: takes in Object with name property
O: returns string "Welcome <name>!"
C:
E:
*/

function welcomeMessage(object) {
// use concatenation to add "welcome" and "!"
// to get property name use dot notation 
// use charAt to make first lett capitalized and use slice to keep the rest lowercase
return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase() + "!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an Object with a name and a species
O: Return "<name is a <species>"
C:
E:
*/

function profileInfo(object) {
   // use concatenation to add " is a " in middle leaving a space on each side
   // to get property name and species use dot notation
   // use charAt to make first lett capitalized and use slice to keep the rest lowercase
   return object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase() + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1).toLowerCase()
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an Object
O: If Oject has a noises array - return them as a string separated by a space
   If Object does not have noises array - return 'there are no noises'
C: NA 
E: NA
*/

function maybeNoises(object) {
   // check if noises exists on the object and is an array and is not an empty array
 if(Array.isArray(object.noises) && object.noises.length > 0){
   // join the strings together and put back into a string
   return object.noises.join(' ')
   // if not an array retrun 'there are no noises'
 } else {
   return 'there are no noises'
 }
 
}
 

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: a string of words and a word
O: return true if word string is in string of words
   if not return false
C:
E:
*/

function hasWord(string, word) {

   // split the string into an array separated by spaces
   // use includes method to check if word string is in the array
   return string.split(' ').includes(word)
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in a Name and an Object
O: Add the name to the Object's friends array then return the object
C:
E:
*/

function addFriend (name, object) {
    // push name onto the friends array in the object
   object.friends.push(name)
   // return object
   return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes a name and an Object
O: Return true if name is a friend of object and false otherwise
C:
E:
*/

function isFriend(name, object) {
   // check to see if friend is an array on object or is empty if so return false
if (!Array.isArray(object.friends)){
   return false
}

// check to see if the name is in the friends array
return object.friends.includes(name)
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I:
O:
C:
E:
*/

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I:
O:
C:
E:
*/

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I:
O:
C:
E:
*/

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I:
O:
C:
E:
*/

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}