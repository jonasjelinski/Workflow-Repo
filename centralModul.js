var CentralModul = CentralModul || {};


CentralModul =(function(domElements, moduls, listeners){
	"use strict";
	centralModul = new EventListener();

	function init(){
		getDOMElements();
		initModuls();
		addListeners();
	}

	function getDOMElements(){

	}

	function initModuls(){

	}

	function addListeners(){

	}

	function switchPage(){
		let event = new Event("switchPage");
		centralModul.dispatchEvent(event);
	}

	function showPage(){

	}

	function tryToRemoveEntity(){

	}

	function removeEntity(){

	}

	function addEntity(){

	}

	function showNextAttribute(){

	}

	function showPreviousAttribute(){

	}

	function saveAttributes(){

	}

	function tryToSaveNewEntity(){

	}

	function giveNegativeSaveFeedBack(){

	}

	function givePositiveSaveFeddBack(){

	}

	function changeEntity(){

	}

	centralModul.init = init;
	return centralModul;
}());