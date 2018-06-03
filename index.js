// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
};

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
};

function destructivelyRemoveLastDriver() {
  drivers.pop()
};

function destructivelyRemoveFirstDriver() {
  drivers.shift()
};

function appendDriver(name) {
  let newdrivers = [...drivers, name];
  return newdrivers;
};

function prependDriver(name) {
   newdrivers = [name, ...drivers];
  return newdrivers;
};

function removeLastDriver() {
  newdrivers = drivers.slice(0,drivers.length-1);
  return newdrivers;
};

function removeFirstDriver() {
  newdrivers = drivers.slice(1)
  return newdrivers;
};
