import SVG from 'svg.js';
require('../app/rund.io.css');

var circleElement = document.createElement('div');
circleElement.setAttribute('id', 'rundio');
document.body.appendChild(circleElement);

var rundIo = SVG('rundio').size(300, 300)
var circle = rundIo.circle(300, 300).attr({fill:'#C0C0C0'});
var text = rundIo.text("rund.io");
text.font({family: 'Lobster', size: 48});
text.center(150, 150);
