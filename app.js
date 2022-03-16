'use strict';

//  hours
let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let seattle = {
  storeName: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  customer:[], // avg/hour
  cookies: [], // number of cookies
  total: 0,
  custAvg: function (){ // this function gives avg cust/hr
    for (let i = 0; i < hours.length; i++){
      // loop thru array
      this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));

    }
  },
  avgCookies: function(){ // gives avg cookies sold/hr per customer
    this.custAvg();
    for (let i = 0; i < hours.length; i++){
      let custAvg = Math.ceil(this.customer[i] * this.avg);
      this.cookies.push(custAvg);
      this.total = this.total + custAvg; // += can be replaced with + custAvg

    }
  },

  render: function(){
    this.avgCookies();
    let base = document.getElementById('cities');
    let city = document.createElement('ul');
    base.appendChild(city);
    let cityName = document.createElement('h1');
    cityName.textContent = this.storeName;
    city.appendChild(cityName);
    for(let i = 0; i < hours.length; i++){
      let listItems = document.createElement('li'); // created loop and list items
      listItems.textContent = hours[i] + ' : ' + this.cookies[i] + ' cookies';
      city.appendChild(listItems);

    }

    let finalTotal = document.createElement('li');
    finalTotal.textContent = 'total: ' + this.total;
    city.appendChild(finalTotal);
  }
};
seattle.render();
console.log(seattle.customer);
console.log(seattle.total);


let tokyo = {
  storeName: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  customer:[], // avg/hour
  cookies: [], // number of cookies
  total: 0,
  custAvg: function (){ // this function gives avg cust/hr
    for (let i = 0; i < hours.length; i++){
      // loop thru array
      this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));

    }
  },
  avgCookies: function(){ // gives avg cookies sold/hr per customer
    this.custAvg();
    for (let i = 0; i < hours.length; i++){
      let custAvg = Math.ceil(this.customer[i] * this.avg);
      this.cookies.push(custAvg);
      this.total = this.total + custAvg; // += can be replaced with + custAvg

    }
  },

  render: function(){
    this.avgCookies();
    let base = document.getElementById('cities');
    let city = document.createElement('ul');
    base.appendChild(city);
    let cityName2 = document.createElement('h1');
    cityName2.textContent = this.storeName;
    //console.log(cityName2);
    city.appendChild(cityName2);
    for(let i = 0; i < hours.length; i++){
      let listItems = document.createElement('li'); // created loop and list items
      listItems.textContent = hours[i] + ' : ' + this.cookies[i] + ' cookies';
      city.appendChild(listItems);

    }

    let finalTotal = document.createElement('li');
    finalTotal.textContent = 'total: ' + this.total;
    city.appendChild(finalTotal);
  }
}
tokyo.render();
console.log(tokyo.customer);
console.log(tokyo.total);

let dubai = {
  storeName: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  customer:[], // avg/hour
  cookies: [], // number of cookies
  total: 0,
  custAvg: function (){ // this function gives avg cust/hr
    for (let i = 0; i < hours.length; i++){
      // loop thru array
      this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));

    }
  },
  avgCookies: function(){ // gives avg cookies sold/hr per customer
    this.custAvg();
    for (let i = 0; i < hours.length; i++){
      let custAvg = Math.ceil(this.customer[i] * this.avg);
      this.cookies.push(custAvg);
      this.total = this.total + custAvg; // += can be replaced with + custAvg

    }
  },

  render: function(){
    this.avgCookies();
    let base = document.getElementById('cities');
    let city = document.createElement('ul');
    base.appendChild(city);
    let cityName3 = document.createElement('h1');
    cityName3.textContent = this.storeName;
    //console.log(cityName2);
    city.appendChild(cityName3);
    for(let i = 0; i < hours.length; i++){
      let listItems = document.createElement('li'); // created loop and list items
      listItems.textContent = hours[i] + ' : ' + this.cookies[i] + ' cookies';
      city.appendChild(listItems);

    }

    let finalTotal = document.createElement('li');
    finalTotal.textContent = 'total: ' + this.total;
    city.appendChild(finalTotal);
  }
}
dubai.render();
console.log(dubai.customer);
console.log(dubai.total);

let paris = {
  storeName: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  customer:[], // avg/hour
  cookies: [], // number of cookies
  total: 0,
  custAvg: function (){ // this function gives avg cust/hr
    for (let i = 0; i < hours.length; i++){
      // loop thru array
      this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));

    }
  },
  avgCookies: function(){ // gives avg cookies sold/hr per customer
    this.custAvg();
    for (let i = 0; i < hours.length; i++){
      let custAvg = Math.ceil(this.customer[i] * this.avg);
      this.cookies.push(custAvg);
      this.total = this.total + custAvg; // += can be replaced with + custAvg

    }
  },

  render: function(){
    this.avgCookies();
    let base = document.getElementById('cities');
    let city = document.createElement('ul');
    base.appendChild(city);
    let cityName4 = document.createElement('h1');
    cityName4.textContent = this.storeName;
    //console.log(cityName2);
    city.appendChild(cityName4);
    for(let i = 0; i < hours.length; i++){
      let listItems = document.createElement('li'); // created loop and list items
      listItems.textContent = hours[i] + ' : ' + this.cookies[i] + ' cookies';
      city.appendChild(listItems);

    }

    let finalTotal = document.createElement('li');
    finalTotal.textContent = 'total: ' + this.total;
    city.appendChild(finalTotal);
  }
}
paris.render();
console.log(paris.customer);
console.log(paris.total);

let lima = {
  storeName: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  customer:[], // avg/hour
  cookies: [], // number of cookies
  total: 0,
  custAvg: function (){ // this function gives avg cust/hr
    for (let i = 0; i < hours.length; i++){
      // loop thru array
      this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));

    }
  },
  avgCookies: function(){ // gives avg cookies sold/hr per customer
    this.custAvg();
    for (let i = 0; i < hours.length; i++){
      let custAvg = Math.ceil(this.customer[i] * this.avg);
      this.cookies.push(custAvg);
      this.total = this.total + custAvg; // += can be replaced with + custAvg

    }
  },

  render: function(){
    this.avgCookies();
    let base = document.getElementById('cities');
    let city = document.createElement('ul');
    base.appendChild(city);
    let cityName5 = document.createElement('h1');
    cityName5.textContent = this.storeName;
    //console.log(cityName2);
    city.appendChild(cityName5);
    for(let i = 0; i < hours.length; i++){
      let listItems = document.createElement('li'); // created loop and list items
      listItems.textContent = hours[i] + ' : ' + this.cookies[i] + ' cookies';
      city.appendChild(listItems);

    }

    let finalTotal = document.createElement('li');
    finalTotal.textContent = 'total: ' + this.total;
    city.appendChild(finalTotal);
  }
}
lima.render();
console.log(lima.customer);
console.log(lima.total);
