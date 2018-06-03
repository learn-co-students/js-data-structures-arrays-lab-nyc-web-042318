// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(element) {
  drivers.push(element);
}

function destructivelyPrependDriver(element) {
  drivers.unshift(element);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(ele) {
  return [...drivers, ele];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
