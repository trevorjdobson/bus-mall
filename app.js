'use strict';

var allProducts = [];
var currentProducts = [];
var randomIndex1;
var randomIndex2;
var randomIndex3;
var previousProduct1;
var previousProduct2;
var previousProduct3;
var totalClicks = 0;

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allProducts.push(this);
  this.clicks = 0;
  this.shown = 0;
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

imgEl1.addEventListener('click', addTally1);
imgEl2.addEventListener('click', addTally2);
imgEl3.addEventListener('click', addTally3);

function addTally1(){
  allProducts[allProducts.indexOf(currentProducts[0])].clicks++;
  randomProduct();
}

function addTally2(){
  allProducts[allProducts.indexOf(currentProducts[1])].clicks++;
  randomProduct();
}
function addTally3(){
  allProducts[allProducts.indexOf(currentProducts[2])].clicks++;
  randomProduct();
}

function randomProduct1() {
  if(totalClicks > 24){
    imgEl1.removeEventListener('click', randomProduct);
    imgEl1.removeEventListener('click', addTally1);
    showData();
  }
  var randomIndex1 = Math.floor(Math.random() * allProducts.length);
  console.log('randomIndex1', randomIndex1);
  while(randomIndex1 === previousProduct1 || randomIndex1 === previousProduct2 || randomIndex1 === previousProduct3){
    console.log('HIT 1st LOOP');
    randomIndex1 = Math.floor(Math.random() * allProducts.length);
  }
  console.log('randomIndex1', randomIndex1);
  currentProducts[0] = allProducts[randomIndex1];
  imgEl1.src = allProducts[randomIndex1].filepath;
  allProducts[randomIndex1].shown++;
}
function randomProduct2() {
  var randomIndex1 = allProducts.indexOf(currentProducts[0]);
  if(totalClicks > 24){
    imgEl2.removeEventListener('click', randomProduct);
    imgEl1.removeEventListener('click', addTally2);
    showData();
  }
  var randomIndex2 = Math.floor(Math.random() * allProducts.length);
  while(randomIndex2 === randomIndex1 || randomIndex2 === previousProduct1 || randomIndex2 === previousProduct2 || randomIndex2 === previousProduct3){
    console.log('HIT 2nd LOOP');
    randomIndex2 = Math.floor(Math.random() * allProducts.length);
  }
  console.log('randomIndex2', randomIndex2);
  currentProducts[1] = allProducts[randomIndex2];
  imgEl2.src = allProducts[randomIndex2].filepath;
  allProducts[randomIndex2].shown++;
}
function randomProduct3() {
  var randomIndex1 = allProducts.indexOf(currentProducts[0]);
  var randomIndex2 = allProducts.indexOf(currentProducts[1]);
  if(totalClicks > 24){
    imgEl3.removeEventListener('click', randomProduct);
    imgEl1.removeEventListener('click', addTally3);
    showData();
  }
  var randomIndex3 = Math.floor(Math.random() * allProducts.length);
  while(randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousProduct1 || randomIndex3 === previousProduct2 || randomIndex3 === previousProduct3){
    console.log('HIT 3rd LOOP');
    randomIndex3 = Math.floor(Math.random() * allProducts.length);
  }
  console.log('randomIndex3', randomIndex3);
  currentProducts[2] = allProducts[randomIndex3];
  imgEl3.src = allProducts[randomIndex3].filepath;
  allProducts[randomIndex3].shown++;
}

function randomProduct(){
  randomProduct1();
  randomProduct2();
  randomProduct3();
  previousProduct1 = allProducts.indexOf(currentProducts[0]);
  previousProduct2 = allProducts.indexOf(currentProducts[1]);
  previousProduct3 = allProducts.indexOf(currentProducts[2]);
  totalClicks++;
}
randomProduct();

var ctx = document.getElementById('chart').getContext('2d');

function showData() {
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      label: allProducts.name,
      datasets: [{
        label: 'Number of Votes',
        data: allProducts.clicks,
      }]
    }
  });
}
