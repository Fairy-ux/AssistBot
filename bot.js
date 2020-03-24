const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkwNzU2OTU4Nzc2NzIxNDE4.XnWDtA.xulUlMG3wFmBSAYLkQVsf4D_bzc';

const PREFIX1 = '!';
const PREFIX2 = 'rpg';

const autoRemind = new Set();
const onHuntCD = new Set();
const onWorkCD = new Set();

bot.on('ready', () =>{
    console.log('Assist Bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX1.length).split(" ");

    switch(args[0].toLowerCase()){
        case 'help':
            message.channel.send('Hello, !remindon turns on your auto remind\n!remindoff turns off your auto remind')
        break;

        case 'remindon':
            if(autoRemind.has(message.author.id)) {
                message.reply("your auto remind is already on!");
            } else {
                autoRemind.add(message.author.id);
                message.reply("your auto remind is now on!");
            }
        break;

        case 'remindoff':
            if(autoRemind.has(message.author.id)) {
                autoRemind.delete(message.author.id);
                message.reply("your auto remind is now off!");
            } else {
                message.reply("your auto remind is already off!");
            }
        break;

        case 'hello':
            message.reply('Hyeloo, nyu hjgniin? Wuaanananana');
        break;

        case 'poll':
            // EMBED NOT WORKING
            // const Embed = new Discord.RichEmbed()
            // .setColor(0xFFC300)
            // .setTitle("Initiate Poll")
            // .setDescription("!poll to initiate a simple yes or no poll!")

            // if(!args[1]) {
            //     message.channel.send(Embed);
            //     break;
            // }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send(msgArgs).then(messageReaction => {
                messageReaction.react("✅");
                messageReaction.react("❎");
            });
        break;

        case 'coinflip':
            function doRandHT() {
                var rand = ['HEADS!','TAILS!'];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
                
                 const embed = {
                "title": `Here is the winner!`,
                "description": doRandHT(),
                "color": 7584788,
                };
                message.channel.send({ embed });
        break;
    }
})

bot.on('message', message=>{

    let args = message.content.toLowerCase().substring(PREFIX2.length).split(" ");

    switch(args[0].toLowerCase()){
        case ' hunt':
            if(message.author.username === "TheHellLaw") {
                if(onHuntCD.has(message.author.id)) {
                    message.reply("your hunt is on cooldown. mangar yumu?")
                }
                else{
                    if(autoRemind.has(message.author.id)) {
                        // message.reply("you will be notified when hunt is ready!");

                        onHuntCD.add(message.author.id);
                        setTimeout(() => {
                            onHuntCD.delete(message.author.id)
                            message.reply("your hunt is ready!")
                        }, 60000*0.65)

                    } else { 
                        onHuntCD.add(message.author.id);
                        setTimeout(() => {
                            onHuntCD.delete(message.author.id)
                        }, 60000*0.65)
                    }
                }
            } else {
                if(onHuntCD.has(message.author.id)) {
                    message.reply("your hunt is on cooldown pliz mahgod")
                }
                else{
                    if(autoRemind.has(message.author.id)) {
                        // message.reply("you will be notified when hunt is ready!");

                        onHuntCD.add(message.author.id);
                        setTimeout(() => {
                            onHuntCD.delete(message.author.id)
                            message.reply("your hunt is ready!")
                        }, 60000)

                    } else { 
                        onHuntCD.add(message.author.id);
                        setTimeout(() => {
                            onHuntCD.delete(message.author.id)
                        }, 60000)
                    }
                }
            }
        break;

        case ' chop':
        case ' fish':
        case ' axe':
        case ' net':
        case ' pickup':
        case ' ladder':
        case ' mine':
        case ' boat': 
        case ' pickaxe':
        case ' tractor':
        case ' chainsaw':
        case ' bigboat':
        case ' drill':
            if(message.author.username === "TheHellLaw") {
                if(onWorkCD.has(message.author.id)) {
                    message.reply("your work commands are on cooldown pliz")
                }
                else{
                    if(autoRemind.has(message.author.id)) {
                        message.reply("Only testing: you will be notified when WORK is ready!");

                        onWorkCD.add(message.author.id);
                        setTimeout(() => {
                            onWorkCD.delete(message.author.id)
                            message.reply("ready to work!")
                        }, 300000*0.65)

                    } else { 
                        onWorkCD.add(message.author.id);
                        setTimeout(() => {
                            onWorkCD.delete(message.author.id)
                        }, 300000*0.65)
                    }
                }
            } else {
                if(onWorkCD.has(message.author.id)) {
                    message.reply("your work commands are on cooldown pliz")
                }
                else{
                    if(autoRemind.has(message.author.id)) {
                        message.reply("Only testing: you will be notified when WORK is ready!");

                        onWorkCD.add(message.author.id);
                        setTimeout(() => {
                            onWorkCD.delete(message.author.id)
                            message.reply("ready to work!")
                        }, 300000)

                    } else { 
                        onWorkCD.add(message.author.id);
                        setTimeout(() => {
                            onWorkCD.delete(message.author.id)
                        }, 300000)
                    }
                }
            }
        break;

        case 'withdraw':

        break;
    }
})

bot.login(process.env.token);
