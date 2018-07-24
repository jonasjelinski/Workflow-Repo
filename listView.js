var HorseApp = HorseApp || {};

HorseApp.ListView= class ListView extends EventTarget{

	constructor(domElement, newEntryTemplate){
		super();
		this.unsortedList = domElement;
		this.newEntryTemplate = newEntryTemplate;
	    this.target.addEventListener("dragstart", this.handleDragStart.bind(this), false);
	    this.target.addEventListener("dragover", this.handleDragOver.bind(this), false);
	    this.target.addEventListener("drop", this.handleDrop.bind(this), false);
	    this.target.addEventListener("onClick", this.handleClick(this), false);
		this.hoverClass = hoverClass;
		this.dropEvent = "onDrop";
		this.clickEvent = "onClick";
		this.targetId = targetId;
	}

	handleDragStart(event) {
        dragElement = this;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/html", this.outerHTML);
	}

	handleDragOver(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.dataTransfer.dropEffect = "move";
        return false;
	}

  	handleDrop(event) {
      if (event.stopPropagation) {
          event.stopPropagation(); 
      }
      if (dragElement !== this) {
        insertDroppedElement(this, event);
        dispatchDropEvent();

      }
      return false;
	}

	insertDroppedElement(that, event){
      let data,
          dropElemement;
      that.parentNode.removeChild(dragElement);
      data = event.dataTransfer.getData("text/html");
      that.insertAdjacentHTML("beforebegin",data);
      dropElemement = that.previousSibling;
      addListeners(dropElemement);    
    }

     addListeners(div){
        div.addEventListener("dragstart", handleDragStart, false);        
        div.addEventListener("dragover", handleDragOver, false);
        div.addEventListener("drop", handleDrop, false);    
    }

	dispatchDropEvent(){
      let event = new Event(this.dropEvent);
      that.dispatchEvent(event);
	}

	addNewElement(listElement){
		listElement.addEventListener("onClick", handleElementClick);
		listElement.addEventListener("fileDropped", handleElementDrop);
		this.unsortedList.appendChild(listElement):
	}

	handleElementClick(event){

	}

	handleElementDrop(event){

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