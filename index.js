// Code your solution here

//Function to findMatch
function findMatching(collection, name) {
    return collection.filter(driver => driver.toLowerCase() == name.toLowerCase());
  }
  
//Function to fuzzyMatch
  function fuzzyMatch(collection, name) {
    return collection.filter(driver => driver.charAt(0,2) == name.charAt(0,2));
  }
  
//Function to matchName
  function matchName(collection, name) {
    return collection.filter(driver => driver.name == name);
  }

