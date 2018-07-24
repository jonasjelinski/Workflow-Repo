var HorseApp = HorseApp || {};

HorseApp.ListElement = class ListElement extends EventTarget{

	constructor(target, targetId, validFileTypes, hoverClass){
		super();
	    this.target.addEventListener("dragover", this.onDragOver.bind(this), false);
	    this.target.addEventListener("dragleave", this.onDragLeave.bind(this), false);
	    this.target.addEventListener("drop", this.onDrop.bind(this), false);
	    this.target.addEventListener("onClick", this.handleClick(this), false);
		this.hoverClass = hoverClass;
		this.dropEvent = "fileDropped";
		this.clickEvent = "onClick";
		this.targetId = targetId;
	}

	onDragOver(event){    
	    this.target.classList.add(this.hoverClass);        
	    event.preventDefault();    
	    event.stopPropagation();    
	    event.dataTransfer.dropEffect = "copy"; 
	    return false;  
	}

	onDragLeave(){
    	this.target.classList.remove(this.hoverClass);
  	}

  	onDrop(event) {
	    var file = event.dataTransfer.files[0];
	    this.target.classList.remove(this.hoverClass);   
	    event.stopPropagation();
	    event.preventDefault();

	    if (file && this.validFileTypes.includes(file.type)) {   
	      this.handleFileDrop(file);
	    }
	    return false;
	}

	handleFileDrop(file) {
	    let event = new Event(this.dropEvent);
	    event.data = file;
	    this.dispatchEvent(event);
	}

	handleClick(){
		let event = new Event(this.clickEvent);
		event.data = this.targetId;
		this.dispatchEvent(event);
	}

};