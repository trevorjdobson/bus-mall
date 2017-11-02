'use strict';

//var zipCode = prompt('Thank you for participating in our product research, before we get started please enter your zip code.');
//console.log('The respondent\'s zip code is: ' + zipCode);

var allProducts = [];
var productCounter = {};
var randomIndex1;
var randomIndex2;
var randomIndex3;
var previousProduct1;
var previousProduct2;
var previousProduct3;
var totalClicks = 0;

function productCounterPopulate(name){
  if(productCounter.hasOwnProperty(name)){
    productCounter[name] += 1;
  }
  else{
    productCounter[name] = 1;
  }
}

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allProducts.push(this);
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

imgEl1.addEventListener('click', randomProduct);
imgEl2.addEventListener('click', randomProduct);
imgEl3.addEventListener('click', randomProduct);

function randomProduct1() {
  if(totalClicks > 24){
    imgEl1.removeEventListener('click', randomProduct);
    showData();
  }
  var randomIndex1 = Math.floor(Math.random() * allProducts.length);
  while(randomIndex1 === previousProduct1 || randomIndex1 === previousProduct2 || randomIndex1 === previousProduct3){
    randomIndex1 = Math.floor(Math.random() * allProducts.length);
    imgEl1.src = allProducts[randomIndex1].filepath;
    productCounterPopulate(allProducts[randomIndex1].name);
  }
}
function randomProduct2() {
  if(totalClicks > 24){
    imgEl2.removeEventListener('click', randomProduct);
    showData();
  }
  var randomIndex2 = Math.floor(Math.random() * allProducts.length);
  while(randomIndex2 === randomIndex1 || randomIndex2 === previousProduct1 || randomIndex2 === previousProduct2 ||  randomIndex2 === previousProduct3){
    randomIndex2 = Math.floor(Math.random() * allProducts.length);
    imgEl2.src = allProducts[randomIndex2].filepath;
    productCounterPopulate(allProducts[randomIndex2].name);
  }
}
function randomProduct3() {
  if(totalClicks > 24){
    imgEl3.removeEventListener('click', randomProduct);
    showData();
  }
  var randomIndex3 = Math.floor(Math.random() * allProducts.length);
  while(randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousProduct1 || randomIndex3 === previousProduct2 || randomIndex3 === previousProduct3){
    randomIndex3 = Math.floor(Math.random() * allProducts.length);
    imgEl3.src = allProducts[randomIndex3].filepath;
    productCounterPopulate(allProducts[randomIndex3].name);
  }
}

function randomProduct(){
  randomProduct1();
  randomProduct2();
  randomProduct3();
  previousProduct1 = randomIndex1;
  previousProduct2 = randomIndex2;
  previousProduct3 = randomIndex3;
  totalClicks++;
}
randomProduct();

function showData() {

}
