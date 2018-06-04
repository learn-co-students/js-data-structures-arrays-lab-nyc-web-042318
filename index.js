// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  let a = [...drivers, name]
  return a
}

function prependDriver(name){
  let a = [name, ...drivers]
  return a
}

function removeLastDriver(){
  let a = drivers.slice(0, 2)
  return a
}

function removeFirstDriver(){
  let a = drivers.slice(1,3)
  return a
}
