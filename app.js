'use strict';

//  hours
let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let allStores = [];
class Stores{
  constructor(name, min, max, avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookies = [];
    this.customer = [];
    this.total = 0;
    allStores.push(this);
  }
}

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);


Stores.prototype.custAvg = function (){ // this function gives avg cust/hr
  for (let i = 0; i < hours.length; i++){
    // loop thru array
    this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));

  }
},
Stores.prototype.avgCookies = function(){ // gives avg cookies sold/hr per customer
  this.custAvg();
  for (let i = 0; i < hours.length; i++){
    let custAvg = Math.ceil(this.customer[i] * this.avg);
    this.cookies.push(custAvg);
    this.total = this.total + custAvg; // += can be replaced with + custAvg

  }
},


Stores.prototype.render = function(){
  this.avgCookies();
  let base = document.getElementById('stores');
  let trElem = document.createElement('tr');
  let tdElem = document.createElement('td');
  base.appendChild(trElem);
  tdElem.textContent = (this.name);
  trElem.appendChild(tdElem);
  for(let i = 0; i < hours.length; i++){
    let tdElem2 = document.createElement('td');
    tdElem2.textContent = this.cookies[i];
    trElem.appendChild(tdElem2);
  }
  let totals = document.createElement('td');
  totals.textContent = this.total;
  trElem.appendChild(totals);
};

function makeTableHead(){
  let tHeadMain = document.getElementById('stores');
  let th1 = document.createElement('th');
  let trElem = document.createElement('tr');
  tHeadMain.appendChild(trElem);
  th1.textContent = 'location';
  trElem.appendChild(th1);
  let hourCount = hours.length;
  for(let i = 0; i < hourCount; i++){
    let thElem2 = document.createElement('th');
    thElem2.textContent = hours[i];
    trElem.appendChild(thElem2);
  }
  let totals = document.createElement('td');
  totals.textContent = ('Totals');
  trElem.appendChild(totals);
}
makeTableHead();
for(let i = 0; i < allStores.length; i++){
  allStores[i].render();
}

let theForm = document.getElementById();

function submit(event){
  event.preventDefault();
}

// line 72 and 73 do the same as the lines below
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
