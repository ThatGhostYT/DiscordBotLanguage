const Token = require("./Token.ts");

module.exports = class Lexer {
	code: string
	ind: number
	char: string

	constructor(code: string) {
		this.code = code
		this.ind = 0
		this.char = this.code[this.ind]
	}

	next() {
		this.ind++
		this.char = this.code[this.ind]
	}

	makeNumber() {
		let num: string = this.char
		while (this.code[this.ind + 1].match(/[0-9]+/)) {
			this.next()
			num += this.char
		}
		return new Token({
			type: "integer",
			value: Number(num)
		})
	}

	makeString() {
		let str: string = ""
		while (this.code[this.ind + 1] != '"') {
			this.next()
			str += this.char
		}
		return new Token({
			type: "string",
			value: str
		})
	}

	lex() {
		let toks: string[] = []
		while (this.char != undefined) {
			
			if (this.char.match(/[0-9]+/)) {
				toks.push(this.makeNumber())
			} else if (this.char == '"') {
				toks.push(this.makeString())
			//} else if ("+-*/%".includes(this.char)) {
				
			//}

			this.next()
		}
		return toks
	}
}