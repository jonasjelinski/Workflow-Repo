horseApp.entityCreater = function(){
	let that = new EventTarget(),
	entity,
	counter = 0;

	setEntity(entity){
		this.entity = entity;
	}

	setAttribute(key, value){
		this.entity.setAttribute(key, value); 
	}	
	
	getNextAttribute(){
		counter++;
		dispatchNextAttribute();				
	}

	getPreviousAttribute(){
		counter --;
		dispatchNextAttribute();
	}

	dispatchNextAttribute(){
		let attribute = this.entity.getAttribute(counter);
		dispatchAttribute(attribute);	
	}

	dispatchAttribute(attribute){

	}
	
}