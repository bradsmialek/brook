'use strict';


// holds all my unicorn instances
var allUnicorns = [];

// constructor function to make my unicorns
function Unicorn(name, color, food, location) {

  this.name = name;
  this.color = color;
  this.food = food;
  this.location = location; 

  //render method creates all elements dynamically and appends to html
  this.render = function() {

    var div = document.createElement('div') 
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
      pasture.addEventListener('click', goToPasture); 
      ul.appendChild(pasture);

      var trail = document.createElement('button');
      trail.id = this.name;
      trail.textContent = 'Take on Trail';
      trail.addEventListener('click', goToTrail); 
      ul.appendChild(trail);

    }else if (this.location === 'pasture'){

      var barn = document.createElement('button');
      barn.id = this.name;
      barn.textContent = 'Take to Barn';
      barn.addEventListener('click', goToBarn); 
      ul.appendChild(barn);

      var trail = document.createElement('button');
      trail.id = this.name;
      trail.textContent = 'Take on Trail';
      trail.addEventListener('click', goToTrail);
      ul.appendChild(trail);

    }else if (this.location === 'trail'){

      var barn = document.createElement('button');
      barn.id = this.name;
      barn.textContent = 'Take to Barn';
      barn.addEventListener('click', goToBarn);
      ul.appendChild(barn);

      var pasture = document.createElement('button');
      pasture.id = this.name;
      pasture.textContent = 'Take to Pasture';
      pasture.addEventListener('click', goToPasture); 
      ul.appendChild(pasture);
    }
    
  }
  allUnicorns.push(this);
};

// calling constructor and storing new instance in variable 
var unicornOne = new Unicorn('henry', 'blue', 'corn', 'barn');
var unicornTwo = new Unicorn('john', 'orange', 'apples', 'pasture');
var unicornThree = new Unicorn('susan', 'green','grapes', 'trail');
var unicornFour = new Unicorn('jacky', 'red', 'bananas', 'barn');

console.log(unicornOne);
console.log(allUnicorns)

// calling render method on instance to show unicorns
unicornOne.render();
unicornTwo.render();
unicornThree.render();
unicornFour.render();


// event handler if pasture button is clicked.  changes location and rerenders 
function goToPasture(event) {

  console.log('pasture')
  console.log(event.target)
  var id = event.target.id;
  for ( var i = 0; i < allUnicorns.length; i++) {
    if( id === allUnicorns[i].name) {
      deleteDiv(event);
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
      deleteDiv(event);
      allUnicorns[i].location = 'trail';
      console.log(allUnicorns)
      allUnicorns[i].render();
      
    }
  }
}

function goToBarn(event) {
  var id = event.target.id;
  for ( var i = 0; i < allUnicorns.length; i++) {
    if( id === allUnicorns[i].name) {
      deleteDiv(event);
      allUnicorns[i].location = 'barn';
      console.log(allUnicorns)
      allUnicorns[i].render();
    }
  }
}

// delete duplicates
function deleteDiv(event) { 

  console.log(event.target.parentNode.parentNode)
  var byeDiv = event.target.parentNode.parentNode
  byeDiv.remove();
  return;
}

//persistance
//css
// stretch  db  talk to db  deply with links