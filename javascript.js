var myObject = {
	'name': 'Hannah',
	'shoe size': 10
}

console.log(myObject.middlename)
//=> undefined

var myObject = {
	'name': 'Hannah',
	'shoe size': 10,
	'middlename': 'Brie Zoe'
}

function sayMyName(myObject){
	console.log('Say My Name, Say My Name... (' + myObject.name + ' ' + myObject.middlename + ' ' + 'Nordgren)' );
	console.log('When nobody is around, say JavaScript I love you.');
}

sayMyName(myObject);

function slowLoris(){
	var lastWord = 'Cute Overload!';
	function haveTheLastWord(){
		// alert(lastWord);
	}
	haveTheLastWord();
}

slowLoris();

 


