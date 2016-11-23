/*
Christian Buco
Nov. 23, 2016
title: javascript test review
*/

var knight = 'Lacelot';
var maiden = 'Jane';
var monster = 'Dragon';
var weaponChest = ['Mace', "Sorcerer's stone", 'Excalibur'];
var hero = {
	wizard : 'Merlin',
	weapon : weaponChest[2],
	power : 30
}

//Hail the King
function swordInTheStone(worthy){
	if(worthy == 'Arthur'){
		console.log('We have found our King' + worthy);
	}else{
		console.log('We must keep searching, for ' + worthy + ' is unworthy.');
	}
}
swordInTheStone(knight);

// Hail the King and Queen
function trueLove(king,queen){
	if(queen == 'Guinevere' && king == 'Arthur'){
		console.log('On this day, our ' + king + ' and ' + queen + ' shall rule happily ever after.');
	}else{
		console.log('We must keep searching, for true love must reign over Camelot.');
	}
}
trueLove(knight,maiden);

//Merlin and Monster
function epicBattle(wizard,enemy,power){
	if(power <= 15){
		console.log('Our ' + wizard + ' has fallen.');
	}else if(power >= 16 && power <= 40){
		console.log(wizard + ' has almost slain the ' + enemy);
	}else{
		console.log('Our ' + wizard + ' has slain the ' + enemy + '!');
	}
}
epicBattle(hero.wizard, monster, hero.power);