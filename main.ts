/*
V1:

create new "bot" as client

on messageCreate grab "message":
	if lower(message->value) === "!ping":
		message<-reply: "Pong!"

V2:

create new bot named "John"

when "John" gets a "message" grab "message":
  if lower(message->value) == "!ping":
    message<-reply("Pong!");
*/

const Lexer = require("./Lexer.ts");

let code = `
create new "bot" as client

on "messageCreate" grab "message":
	if lower(message->value) === "!ping":
		message<-reply: "Pong!"
`

const lexer = new Lexer(code)
console.log(lexer.lex())