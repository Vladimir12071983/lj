'use strict';

// средство es6: блок "левых" объявлений
const sentences = [
	{subject: 'JavaScript', verb: 'is', object: 'great'},
	{subject: 'Elephants', verb: 'are', object: 'large'},
];

// средство es6: деструктуризация объекта
function say({subject, verb, object}) {
	// средство es6: строки шаблона
	console.log(`${subject} ${verb} ${object}`);
}
// средство es6: for..of
for (let s of sentences){
	say(s);
} 


