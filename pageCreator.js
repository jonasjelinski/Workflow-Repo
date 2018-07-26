horseApp.pageCreator = function(options){
	let that = {},
		dataObject,
		templateString,
		domElement;

		init(){
			dataObject = options.dataObject;
			templateString = options.templateString;
			domElement = options.domElement;
		}

		createPage(){
			let htmlString = _.template(templateString, dataObject);
			domElement.innerHTML = htmlString;
		}
		
		that.init = init;
		that.createPage = createPage;
		return that;
}