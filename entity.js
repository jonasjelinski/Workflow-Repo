  class Entity{
	constructor(attributes){
		this.attributes = attributes;
	}
	
	setAttribute(key, value){
		let attribute = attributes[key];
		attribute.value = value;
		attributes[key] = attribute;
	}

	getAttribute(key){
		return attributes[key];
	}
	
	getAllAttributes(){
		return this.attributes;
	}

	hasAllNecessaryAtrributes(){
		if(!oneNecessaryAttributeIsUndefined){
			return true;
		}
		return false;	
	}

	oneNecessaryAttributeIsUndefined(){
		for(int i=0; i < this.attributes.length; i++){
			let attribute = this.attributes[i];	
			if(attribute.isNecessary){
				if(attribute.value === undefined){
					return true;
				}
			}			
		}
		return false;
	}

}