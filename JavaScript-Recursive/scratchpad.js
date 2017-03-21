function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var fib = function (n, node) {
	var tree = fibHelper(n)
		node.appendChild(tree.html);
	  node.setAttribute("id", "fib");
}



function pelHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "pel")
    
    if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
    	var p = document.createElement('p');
		p.textContent = 'Pel(' + n + ') = ' + value;
		div.appendChild(p)
    }
	else {
		var left = pelHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " pel-left");
		
		var right = pelHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " pel-right");

		value = left.value + left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pel(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
    
var pel = function (n, node) {
    var tree = pelHelper(n)
        node.appendChild(tree.html);
      node.setAttribute("id", "pel");
}

function triHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "tri");

    if (n < 3) {
            if (n === 0) {
                value = 0;
            } 
            else if (n === 1) {
                value = 0;
            }
            else if (n === 2) {
                value = 1;
               }
            var p = document.createElement('p');
            p.textContent = 'Tri(' + n + ') = ' + value;
            div.appendChild(p)
        }
    else {
            var left = triHelper(n - 1);
            var clas = left.html.getAttribute("class");
            left.html.setAttribute("class", clas + " tri-left");

            var mid = triHelper(n - 2);
            clas = mid.html.getAttribute("class");
            mid.html.setAttribute("class", clas + " tri-mid");

            var right = triHelper(n - 3);
            clas = right.html.getAttribute("class");
            right.html.setAttribute("class", clas + " tri-right");

            value = left.value + mid.value + right.value;
            var p = document.createElement('p');
            p.textContent = 'Tri(' + n + ') = ' + value;
            div.appendChild(p);

            div.appendChild(left.html);
            div.appendChild(mid.html);
            div.appendChild(right.html);
        }

    return { 'value': value, 'html': div };
}

var tri = function (n, node) {
    var tree = triHelper(n)
        node.appendChild(tree.html);
      node.setAttribute("id", "tri");
}

var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
	"}" +
	"" +
	".fib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	"#pel {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
	"}" +
	"" +
	".pel {" +
	"	background-color:rgba(0,255,0,0.1);" +
	"}" +
	"" +
	".pel-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".pel-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".tri {" +
	"	background-color:rgba(255,0,0,0.1);" +
	"}" +
	"" +
	".tri-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".tri-mid {" +
	"	float: middle;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".tri-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" ;

document.querySelector('body').appendChild(style);

( function(color, id) {
	var div = document.createElement('div');
	div.setAttribute('class', color + ' shadowed stuff-box');
	div.setAttribute('id', id);
	document.body.appendChild(div);
}('red', 'fib'));

fib(11, document.querySelector('.red'))

var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var blueDiv = divMakerMaker('blue', 'pel');
var yellowDiv = divMakerMaker('yellow', 'tri');

blueDiv();
yellowDiv();

pel(11, document.querySelector('.blue'))
tri(11, document.querySelector('.yellow'))
