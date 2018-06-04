// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
};

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
};

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
};

function appendDriver(name) {
  return drivers.concat(name)
};

function prependDriver(name) {
  let a = [name]
  return a.concat(drivers)
};

function removeLastDriver() {
  return drivers.slice(0,2)
};

function removeFirstDriver() {
  return drivers.slice(1,3)
}
