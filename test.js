// array.sort

let numbers = [1, 3, 6, 4, 2, 5];
let x = numbers.sort(function (a, b) {
	return a - b;
});
console.log(x);


let y = numbers.sort(function (a, b) {
	return b - a;
});
console.log(y);



let employees = [
	{name:'Anh', age: 19},
	{name:'Tu', age: 18},
	{name:'Huy', age: 20}
];
console.log(employees);
let newEmployees = employees.sort(function (a, b) {
	return a.age - b.age;
});
console.log(newEmployees);


// math.randum 
function tossAcoin() {
  let random = Math.random();
  console.log(random);
  return random > 0.5;
}
console.log('Mặt sấp : ', tossAcoin()); 


// Math.round : tự dộng làm tròn 
console.log(Math.round(9.5));

///////////////////////////////////////////////////////////////////////

// new keyword 
let mouse = {
  weight: 0.2,
  getWeight: function() {
    return this.weight;
  }
};
// console.log(mouse.getWeight());

// constructor function
function Mouse(color, weight) {
  this.type = 'mouse';
  this.color = color ;
  this.weight = weight;
}
let mouse1 = new Mouse('white', 0.2);
let mouse2 = new Mouse('black', 0.3);
console.log(mouse1);
console.log(mouse2);

console.log('===============');
let tom = {
  name: 'Tom',
  stomach: [],
  eat: function(mouse) {
    this.stomach.push(mouse);
    return this;
  }
};
let m1 = {name: 'm1'};
let m2 = {name: 'm2'};
let m3 = {name: 'm3'};

tom.eat(m1).eat(m2).eat(m3); // method chaining 
console.log(tom);

//////////////////////////////////////////////////////////////////////////////
//Prototype 
// Create a new object, object literal 


let mouse = {
  weight: 0.2,
  getWeight: function() {
    return this.weight;
  }
};

function Mouse(color, weight) {
  this.type = 'mouse';
  this.color = color;
  this.weight = weight; 
}

Mouse.prototype.sleep = function() {

  console.log(this.color + '   Zzzz...');
}
// console.log(Mouse.prototype.constructor);

 var jerry = new Mouse('orange', 20);
 jerry.sleep();

 var mickey = new Mouse('white', 10);
 mickey.sleep();


 console.log('===================');

////////////////////////////////////////////////////////////////////////////////
// note module
//constructor function
function Mouse(color) {
  this.color = color;
  this.dead = false;
}

Mouse.prototype.die = function () {
  this.dead = true;
};

function Cat() {
  this.stomach = [];
};

Cat.prototype.eat = function(mouse) {
  this.stomach.push(mouse);
  mouse.die();
};

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat() ;
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);









