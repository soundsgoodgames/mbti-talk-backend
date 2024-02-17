const chatController = require("../Controllers/chat.controller");
const userController = require("../Controllers/user.controller");

module.exports = function(io){
    io.on("connection", async(socket)=>{
        console.log("client is connected", socket.id);

        // Save user information
        socket.on("login", async(userName, cb) => {
            try {
                const user = await userController.saveUser(userName, socket.id);
                const welcomeMessage = {
                    chat: `${user.name} is joined to this room`,
                    user: { id: null, name: "system" },
                };
                io.emit("message", welcomeMessage);
                cb({ ok: true, data: user });
            } catch (error) {
                cb({ ok: false, error: error.message });
            }
        });
        
        socket.on("sendMessage", async(message, cb) => {
            try{
                // Find the user with the socket id
                const user = await userController.checkUser(socket.id);

                // save the message
                const newMessage = await chatController.saveChat(message, user);
                io.emit("message", newMessage);
                cb({ ok: true });
            } catch (error) {
                cb({ ok: false, error: error.message });
            }            
        });
        
        socket.on("disconnect", () => {
            console.log("user is disconnected");
        });
    });
};