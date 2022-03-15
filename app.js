'use strict'

//  hours
let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

let seattle = {
  storeName: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  customer:[], // avg/hour
  cookies: [], // number of cookies
  total: 0,
  custAvg: function (){           // this function gives avg cust/hr
    for (let i = 0; i < hours.length; i++){
      // loop thru array
      this.customer.push(Math.floor(Math.random() * (this.max - this.min) + this.min))
      
    }
  },
    avgCookies: function(){      // gives avg cookies sold/hr per customer
    this.custAvg();
    for (let i = 0; i < hours.length; i++){
      let custAvg = Math.ceil(this.customer[i] * this.avg);
      this.cookies.push(custAvg);
      this.total = this.total + custAvg; // += can be replaced with + custAvg
      
    }  
  },
  
  render: function(){
    this.avgCookies();
    document.getElementById('seattle')
    let list = document.getElementById('seattle')
    for(let i = 0; i < hours.length; i++){
      let listItems = document.createElement('li'); // created loop and list items
      listItems.textContent = hours[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(listItems);
      
    }
    
    let finalTotal = document.createElement('li')
    finalTotal.textContent = 'total: ' + this.total;
    list.appendChild(finalTotal)
  }
}
seattle.render();
console.log(seattle.customer);
console.log(seattle.total);