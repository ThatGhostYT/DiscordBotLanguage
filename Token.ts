interface TokenOptions{
	type: string;
	value: any;
}

class Token{
	type: string;
	value: any;

	constructor(options: TokenOptions){
		this.type = options.type;
		this.value = options.value;
	}
}