/*
This modul allows to set or get data from the database of the server
https://www.w3resource.com/ajax/working-with-PHP-and-MySQL.php
*/

var databaseRequestModul = databaseRequestModul || function () {
	"use strict";

	const METHODS = {
      GET: "GET",
      POST: "POST",      
    },
    URL = {
    	URL: "www.test.de"
    }; 

	that = {},
	requestModul = new requestModul();	

	function getResult(){
		let result;		
		function setResult(requestResult){
			result = requestResult;

		}
		requestModul.request(setResult, null, METHODS.GET, URL.URL, null);
		return result;
	}

	function setData(data){
		requestModul.request(setResult, null, METHODS.POST, URL.URL, data);
	}

	function setEntryIntoDataBase(entry){
		setData(entry);
	}

	function getEntryFromDataBase(){
		let result = getResult();
		return result;
	}


} 