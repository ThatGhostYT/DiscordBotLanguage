// should i make a github for this?

// sure

let codeV1 = `
create new "bot" as client // Makes client and stores it in a variable.

on messageCreate grab "message": // Gets message object and stores it in a variable.
  if lower(message->value) == "!ping":
    message->reply with "Pong!";
w`

let codeV2 = `
create new bot named "John"

when "John" gets a "message" grab "message":
  if lower(message->value) == "!ping":
    message<-reply("Pong!");`
`

