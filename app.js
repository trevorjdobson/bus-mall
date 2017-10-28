'use strict';

//var zipCode = prompt('Thank you for participating in our product research, before we get started please enter your zip code.');
//console.log('The respondent\'s zip code is: ' + zipCode);

Product.allProducts = [];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Product.allProducts.push(this);
}

new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulha', 'img/chair.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dog-duck.jpg');
new Product('Pen', 'img/dog-duck.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/pet-sweep.jpg');
new Product('Shark', 'img/pet-sweep.jpg');
new Product('Baby Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/tauntaun.jpg');
new Product('USB', 'img/usb.gif');
new Product('Water Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/water-can.jpg');

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');

imgEl1.addEventListener('click', randomProduct1);
imgEl2.addEventListener('click', randomProduct2);
imgEl3.addEventListener('click', randomProduct3);

function randomProduct1() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl1.src = Product.allProducts[randomIndex].filepath;
}
function randomProduct2() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl2.src = Product.allProducts[randomIndex].filepath;
}
function randomProduct3() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl3.src = Product.allProducts[randomIndex].filepath;
}
randomProduct1();
randomProduct2();
randomProduct3();
