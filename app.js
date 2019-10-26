'use strict';

// holds all my unicorn instances
var allUnicorns = [];
checkLocalStorage();

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

var unicornOne;
var unicornTwo;
var unicornThree;
var unicornFour;
var unicornFive;
var unicornSix;
var unicornSeven;
var unicornEight;
var unicornNine;
var unicornTen;
var unicornEleven;
var unicornTwelve;

// calling constructor and storing new instance in variable 
function makeUnicorns(){
  unicornOne = new Unicorn('Henry', 'blue', 'corn', 'barn');
  unicornTwo = new Unicorn('John', 'orange', 'apples', 'barn');
  unicornThree = new Unicorn('Susan', 'green','grapes', 'barn');
  unicornFour = new Unicorn('Jacky', 'red', 'bananas', 'barn');
  unicornFive = new Unicorn('Jinx', 'rainbow', 'bugs', 'barn');
  unicornSix = new Unicorn('Rainbow', 'orange', 'figs', 'barn');
  unicornSeven = new Unicorn('Smack', 'green','carrots', 'barn');
  unicornEight = new Unicorn('Jock', 'black', 'mud', 'barn');
  unicornNine = new Unicorn('Jinx', 'rainbow', 'bugs', 'barn');
  unicornTen = new Unicorn('Rainbow', 'orange', 'figs', 'barn');
  unicornEleven = new Unicorn('Peaches', 'green','carrots', 'barn');
  unicornTwelve = new Unicorn('Rocky', 'black', 'mud', 'barn');
}

// calling render method on instance to show unicorns
function renderCall() {
  unicornOne.render();
  unicornTwo.render();
  unicornThree.render();
  unicornFour.render();
  unicornFive.render();
  unicornSix.render();
  unicornSeven.render();
  unicornEight.render();
  unicornNine.render();
  unicornTen.render();
  unicornEleven.render();
  unicornTwelve.render();
}


// event handler if pasture button is clicked.  changes location and rerenders 
function goToPasture(event) {

  var id = event.target.id;
  for ( var i = 0; i < allUnicorns.length; i++) {
    if( id === allUnicorns[i].name) {
      deleteDiv(event);
      allUnicorns[i].location = 'pasture';
      storeUnicorns(allUnicorns);
      allUnicorns[i].render();
    }
  }
}

function goToTrail(event) {

  var id = event.target.id;
  for ( var i = 0; i < allUnicorns.length; i++) {
    if( id === allUnicorns[i].name) {
      deleteDiv(event);
      allUnicorns[i].location = 'trail';
      storeUnicorns(allUnicorns);
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
      storeUnicorns(allUnicorns);
      allUnicorns[i].render();
    }
  }
}

// delete duplicates
function deleteDiv(event) { 
  var byeDiv = event.target.parentNode.parentNode
  byeDiv.remove();
  return;
}

//persistance
function storeUnicorns(unicorns){
  localStorage.setItem('allUnicorns', JSON.stringify(unicorns));
}

function checkLocalStorage(){
  var unicornStorage = localStorage.getItem('allUnicorns');
  var parsed = JSON.parse(unicornStorage);

  if (parsed === null) {
    makeUnicorns();
    renderCall();
  }else{
    for(var i = 0; i < parsed.length; i++){
      var name = parsed[i].name;
      var color = parsed[i].color;
      var food = parsed[i].food;
      var location = parsed[i].location;
      var stored = new Unicorn(name, color, food, location);
      stored.render();
    }
  }
}


// stretch  db  talk to db  deply with links