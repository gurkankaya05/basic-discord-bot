const {Client , Intents} = require('discord.js');

require('dotenv').config();

const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS ]})



client.on("messageCreate",message => {
    if(message.content.toLowerCase() === "Solidity"){

        return message.channel.send("Solidity : https://docs.soliditylang.org/en/v0.8.15/");
    }
    else if (message.content.toLowerCase() === "JavaScript "){
        return message.channel.send("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    }

    else if(message.content.toLowerCase() === "C#"){
        return message.channel.send("https://docs.microsoft.com/tr-tr/dotnet/csharp/")
    }
    else if(message.content.toLowerCase() === "Java"){
        return message.channel.send("https://docs.oracle.com/en/java/")
    }   
})
client.login(process.env.TOKEN_URI);          