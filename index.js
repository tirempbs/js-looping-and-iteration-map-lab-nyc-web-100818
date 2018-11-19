// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(name) {return name.toLowerCase();});
}

function nameToAttributes(array) {
  return array.map(
    function(person) {
      let name = person.split(' ');
      return {firstName: name[0], lastName: name[1]}
    }
  );
}

function attributesToPhrase(array) {
  return array.map(
    function(object) {
      return `${object.name} is from ${object.hometown}`
    }
  );
}
