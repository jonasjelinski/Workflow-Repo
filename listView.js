var HorseApp = HorseApp || {};

HorseApp.ListView= class ListView extends EventTarget{

	constructor(domElement, newEntryTemplate){
		super();
		this.unsortedList = domElement;
		this.newEntryTemplate = newEntryTemplate;
	}

    addNewElement(domListElement, id){
    	let listElement = new listElement(domListElement, id);
    	addListeners(listElement);
		this.unsortedList.appendChild(domListElement):
	}

	addListeners(listElement){  
        listElement.addEventListener(listElement.dropEvent, handleElementDrop, false);    
    }


    handleElementDrop(event){
    	let details = event.details,    		
    		droppedElement = event.details.droppedElement,    		
    		element = that.element;
    		if(!isDroppingOnItsself(this, droppedElement)){
    			insertDroppedElement(element, droppedElement);
    		}    		
    }

    isDroppingOnItsself(self, droppedElement){
    	let selfId = self.elementId,
    		droppedId = droppedElement.elementId,
    	if(droppedId === selfId){
    		return true;
    	}
    	return false;
    }	

    insertDroppedElement(element, droppedElement){           
      removedroppedElementFromPreviousPosition(droppedElement);
      insertdroppedElementIntoNewPosition(element, droppedElement);       
    }

    removedroppedElementFromPreviousPosition(droppedElement){
    	let li = droppedElement.element;
    	this.unsortedList.removeChild(li);
    }

    insertdroppedElementIntoNewPosition(element, droppedElement){
    	let li = droppedElement.element;
    	element.insertBefore(li);
    }    

	dispatchDropEvent(){
      let event = new Event(this.dropEvent);
      that.dispatchEvent(event);
	}	

	handleElementClick(event){

	}

	deleteElementById(id){

	}

	getCurrentListOrder(){
		let listElements = framesList.children,
		ids = [];
		for(let i = 0; i < listElements.length; i++){
		//let id = listElements[i].getElementsByTagName("img")[0].getAttribute("frame");
		//ids.push(id);
		}
		return ids; 
	}
};