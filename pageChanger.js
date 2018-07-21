var PageChanger = PageChanger || {};


PageChanger = (function(){
	"use strict";
	let pageChanger = {},
		currentPage;

	const PAGES = {
		LOGIN_PAGE: "LOGIN",
		MAIN_PAGE: "MAIN",
		DATES_PAGE: "DATES",
		USER_PAGE: "USER_PROFILE",
		HORSE_PAGE: "HORSE_PROFILE",
		CREATE_DATE: "CREATE_DATE",
		CREATE_USER: "CREATE_USER",
		CREATE_HORSEBOX: "CREATE_HORSEBOX",
	}

	function switchPage(page){
		switch(page){
			case PAGES.LOGIN_PAGE:
				handlePageSwitch();
				break;
			case PAGES.MAIN_PAGE:
				handlePageSwitch();
				break;
			case PAGES.DATES_PAGE:
				handlePageSwitch();
				break;
			case PAGES.USER_PAGE:
				handlePageSwitch();
				break;
			case PAGES.HORSE_PAGE:
				handlePageSwitch();
				break;
			case PAGES.CREATE_DATE:
				handlePageSwitch();
				break;
			case PAGES.CREATE_USER:
				handlePageSwitch();
				break;
			case CREATE_HORSEBOX:
				handlePageSwitch();
				break;
			default:
				break;
		}
	}

	function handlePageSwitch(newPage){
		deleteOldPage();
		currentPage = newPage;
		drawPage();
	}

	function drawPage(){
		currentPage.drawThisPage();
	}

	function deleteOldPage(){
		if(currentPage!==undefined){
			currentPage.delteThisPage();
		}
	}

	pageChanger.switchPage = switchPage;
	return pageChanger;
}());