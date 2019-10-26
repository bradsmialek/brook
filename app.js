'use strict';

//create var that instantiate new unicorns with data

//constructor function  createUnicorn
  //variables to deconstruct data

//methods makes html elements
  //populate elements with new uncorn data

// holds all my unicorn instances
var allUnicorns = [];

// constructor function to make my unicorns
function Unicorn(name, color, food, location) {

  this.name = name;
  this.color = color;
  this.food = food;
  this.location = location; // will need to use and change

  //render method creates all elements dynamically and appends to html
  this.render = function() {

    var div = document.createElement('div') // create to style like a card
    div.className = 'card'
    var ul = document.createElement('ul')
    var liName = document.createElement('li');
    var liColor = document.createElement('li');
    var liFood = document.createElement('li');
    
    liName.textContent = `Name: ${this.name}`;
    liColor.textContent = `Color: ${this.color}`;      
    liFood.textContent = `Favorite Food: ${this.food}`           

    ul.appendChild(liName);
    liName.append(liColor);
    liName.append(liFood);
    
    var sec = document.getElementById(this.location);
    div.append(ul);
    sec.appendChild(div);

    if(this.location === 'barn'){

      var pasture = document.createElement('button');
      pasture.id = this.name;
      pasture.textContent = 'Take to Pasture';
      pasture.addEventListener('click', goToPasture); //need function
      ul.appendChild(pasture);

      var trail = document.createElement('button');
      trail.id = this.name;
      trail.textContent = 'Take on Trail';
      trail.addEventListener('click', goToTrail); //need function
      ul.appendChild(trail);

    }
    
  }
  allUnicorns.push(this);
};


// calling constructor and storing new instance in variable 
var unicornOne = new Unicorn('henry', 'blue', 'corn', 'barn');
// var unicornTwo = new Unicorn('john', 'orange', 'apples', 'barn');
// var unicornThree = new Unicorn('susan', 'green','grapes', 'barn');
// var unicornFour = new Unicorn('jacky', 'red', 'bananas', 'barn');

console.log(unicornOne);
console.log(allUnicorns)

// calling render method on instance to show unicorns
unicornOne.render();
// unicornTwo.render();
// unicornThree.render();
// unicornFour.render();


//maybe buttons as options

// render all unicorn
//persistance
//css
// stretch  db  talk to db  deply with links


function goToPasture(event) {

  console.log('pasture')
  console.log(event.target)
  var id = event.target.id;
  for ( var i = 0; i < allUnicorns.length; i++) {
    if( id === allUnicorns[i].name) {
    
      allUnicorns[i].location = 'pasture';
      console.log(allUnicorns)
      allUnicorns[i].render();
    }
  }
}

function goToTrail(event) {

  console.log('trail')
  console.log(event.target.id);
  var id = event.target.id;

  for ( var i = 0; i < allUnicorns.length; i++) {
    if( id === allUnicorns[i].name) {
      
      allUnicorns[i].location = 'trail';
      console.log(allUnicorns)
      allUnicorns[i].render();
      
    }
  }
}