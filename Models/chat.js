const mongoose = require("mongoose");

// Schema = blueprint of data
const chatSchema = new mongoose.Schema(
    {
        // contents of the message
        chat: String,

        // who sent the message
        user: {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    {timestamp: true}
);

module.exports = mongoose.model("Chat", chatSchema);