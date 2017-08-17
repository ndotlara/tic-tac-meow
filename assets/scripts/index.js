'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
// TODO fix the navbar minimenu toggle -- check CSS/HTML
// document.getElementById('minimenu').onclick = function() {
//   document.getElementById('navbar').style.display = (document.getElementById('navbar').style.display == 'none') ? 'block':'none';
// }

var navbar = document.getElementById('navbar');
var btnmenu = document.getElementById('minimenu');
btnmenu.onclick = function() {
  console.dir(navbar);
  console.log(navbar);
  navbar.className = (navbar.className === '') ? 'sm-screen': '';
}
