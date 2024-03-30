console.log("Server starting")
const websocketServer = require("ws").Server;
const socket = new websocketServer({port: 5001});

try{
    socket.on("connection", function(ws){
    ws.on("message", function(message){
        try{
            console.log(`Message recieved: ${message}` )
            let response = ""
           if(message == "Hello"){
                console.log('inside hello')
                 response = "Hello, How are you?"
            }
            if(message == "I'm fine"){
                response = ""
            }
            if(message == "How are you?"){
                response = "I'm fine too. Thank you for asking."
            }
            console.log("response", response)
            
                ws.send(response)
            
        }
        catch(error){
            console.log(error)
        }
    })
})
}
catch(error){
    console.log(error)
}
console.log("socket established")

 