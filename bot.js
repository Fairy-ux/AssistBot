const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkwNzU2OTU4Nzc2NzIxNDE4.XnWDtA.xulUlMG3wFmBSAYLkQVsf4D_bzc';

const PREFIX1 = '!';
const PREFIX2 = 'rpg ';

const autoRemind = new Set();
const onCD = new Set();

bot.on('ready', () =>{
    console.log('Assist Bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX1.length).split(" ");

    switch(args[0]){
        case 'help':
            message.channel.send('Hello, !remindon turns on your auto remind\n!remindoff turns off your auto remind')
        break;

        case 'remindon':
            autoRemind.add(message.author.id);
            message.reply("your auto remind is now on!");
        break;

        case 'remindoff':
            autoRemind.delete(message.author.id);
            message.reply("your auto remind is now off!");
        break;

        case 'hello':
            message.reply('fk u :)');
        break;
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX2.length).split(" ");

    switch(args[0]){
        case 'hunt' || 'Hunt' || 'HUNT':
            if(message.author.username === "TheHellLaw") {
                if(onCD.has(message.author.id)) {
                    message.reply("IT IS ON COOLDOWN!!!!!!")
                }
                else{
                    if(autoRemind.has(message.author.id)) {
                        message.reply("you will be notified when hunt is ready!");

                        onCD.add(message.author.id);
                        setTimeout(() => {
                            onCD.delete(message.author.id)
                            message.reply("your hunt is ready!")
                        }, 60000*0.65)

                    } else { 
                        onCD.add(message.author.id);
                        setTimeout(() => {
                            onCD.delete(message.author.id)
                        }, 60000*0.65)
                    }
                }
            } else {
                if(onCD.has(message.author.id)) {
                    message.reply("IT IS ON COOLDOWN!!!!!!")
                }
                else{
                    if(autoRemind.has(message.author.id)) {
                        message.reply("you will be notified when hunt is ready!");

                        onCD.add(message.author.id);
                        setTimeout(() => {
                            onCD.delete(message.author.id)
                            message.reply("your hunt is ready!")
                        }, 60000)

                    } else { 
                        onCD.add(message.author.id);
                        setTimeout(() => {
                            onCD.delete(message.author.id)
                        }, 60000)
                    }
                }
            }
        break;
    }
})

bot.login(process.env.token);
