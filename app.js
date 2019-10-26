'use strict';

//create var that instantiate new unicorns with data

//constructor function  createUnicorn
  //variables to deconstruct data

//methods makes html elements
  //populate elements with new uncorn data


function Unicorn(name, color, food) {

  this.name= name;
  this.color= color;
  this.food= food;

  this.render = function() {

    var ul = document.createElement('ul')
    var li = document.createElement('li');
    li.textContent = (this.name);
    ul.appendChild(li);
    var sec = document.getElementById('barn');
    sec.appendChild(ul);
    
  }

};

var unicornOne = new Unicorn('henry', 'blue', 'corn');
var unicornTwo = new Unicorn('john', 'orange', 'apples');
var unicornThree = new Unicorn('susan', 'green','grapes');
var unicornFour = new Unicorn('jacky', 'red', 'bananas');

// console.log(unicornOne);

unicornOne.render();


//maybe buttons as options

// render all unicorn
//persistance
//css
// stretch  db  talk to db  deply with links




