const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '****'; ## hidden due to bot token compromise issue.

const PREFIX1 = '!';
const PREFIX2 = 'rpg ';

const autoRemind = new Set();
const onHuntCD = new Set();
const onWorkCD = new Set();
const onAdvCD = new Set();
const onLbCD = new Set();
const guildCD = new Set();

bot.on('ready', () =>{
    console.log('Assist Bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX1.length).split(" ");

    switch(args[0].toLowerCase()){
        case 'help':
            message.channel.send('**Hello!\n!remindon turns on your auto remind\n!remindoff turns off your auto remind**')
        break;

        case 'info':
            message.channel.send('**Assist Bot for EPIC RPG by Fxxrx\nStill in testing!*')
            // function showInfo() {
            //     var info = 'Assist Bot for EPIC RPG by Fxxrx\nStill in testing!';
            //     return info;
            //     }
                
            //      const embedInfo = {
            //     "title": `Assist Bot`,
            //     "description": showInfo(),
            //     "color": 7584788,
            //     };
            //     message.channel.send({ embedInfo });
        break;

        case 'test':
            message.channel.send('**If you mess up the assist timer and your actual CD\nDo the command ASAP, wait until the assist timer reminds you, check if your actual CD is ready, if its ready, good to go!**')
            // function showTest() {
            //     var test = 'Do the command ASAP, wait until the assist timer reminds you, check if your actual CD is ready, if its ready, good to go!';
            //     return test;
            //     }
            //      const embedTest = {
            //     "title": `If you mess up the assist timer and your actual CD`,
            //     "description": showTest(),
            //     "color": 7584788,
            //     };
            //     message.channel.send({ embedTest });
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
            message.reply('Hyeloo');
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
    if(message.content.startsWith("rpg ") || message.content.startsWith("Rpg ") || message.content.startsWith("RPG ")) {

        let args = message.content.toLowerCase().substring(PREFIX2.length).split(" ");

        switch(args[0].toLowerCase()){
            case 'hunt':
                if(message.author.username === "FML Kami") {
                    if(onHuntCD.has(message.author.id)) {
                        message.reply("your hunt is on cooldown.")
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
                        message.reply("your hunt is on cooldown!")
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

            case 'chop':
            case 'fish':
            //case 'axe':
            case 'net':
            case 'pickup':
            case 'ladder':
            case 'mine':
            case 'pickaxe':
            case 'boat': 
            case 'tractor':
            case 'chainsaw':
            case 'bigboat':
            case 'drill':
                if(message.author.username === "FML Kami") {
                    if(onWorkCD.has(message.author.id)) {
                        message.reply("your work commands are on cooldown!");
                    }
                    else{
                        if(autoRemind.has(message.author.id)) {
                            message.channel.send("Only testing: you will be notified when WORK is ready!");

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
                        message.reply("your work commands are on cooldown!")
                    }
                    else{
                        if(autoRemind.has(message.author.id)) {
                            message.channel.send("Only testing: you will be notified when WORK is ready!");

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

            case 'buy':
                if(args[1].toLowerCase() === "ed" && args[2].toLowerCase() === lb) {
                        if(onLbCD.has(message.author.id)) {
                            message.reply("your LOOTBOX is on cooldown!")
                        }
                        else{
                            if(autoRemind.has(message.author.id)) {
                                message.channel.send("Only testing: you will be notified when LOOTBOX is ready!");

                                onLbCD.add(message.author.id);
                                setTimeout(() => {
                                    onLbCD.delete(message.author.id)
                                    message.reply("LOOTBOX READY")
                                }, 10800000)

                            } else { 
                                onLbCD.add(message.author.id);
                                setTimeout(() => {
                                    onLbCD.delete(message.author.id)
                                }, 10800000)
                            }
                        }
                    }
            break;

            case 'adv':
            case 'adventure':
                if(message.author.username === "FML Kami") {
                    if(onAdvCD.has(message.author.id)) {
                        message.reply("your ADV is on cooldown");
                    }
                    else{
                        if(autoRemind.has(message.author.id)) {
                            message.channel.send("Only testing: you will be notified when ADV is ready!");

                            onAdvCD.add(message.author.id);
                            setTimeout(() => {
                                onAdvCD.delete(message.author.id)
                                message.reply("ready to work!")
                            }, 3600000*0.65)

                        } else { 
                            onAdvCD.add(message.author.id);
                            setTimeout(() => {
                                onAdvCD.delete(message.author.id)
                            }, 3600000*0.65)
                        }
                    }
                } else {
                    if(onAdvCD.has(message.author.id)) {
                        message.reply("your ADV is on cooldown")
                    }
                    else{
                        if(autoRemind.has(message.author.id)) {
                            message.channel.send("Only testing: you will be notified when ADV is ready!");

                            onAdvCD.add(message.author.id);
                            setTimeout(() => {
                                onAdvCD.delete(message.author.id)
                                message.reply("ready to work!")
                            }, 3600000)

                        } else { 
                            onAdvCD.add(message.author.id);
                            setTimeout(() => {
                                onAdvCD.delete(message.author.id)
                            }, 3600000)
                        }
                    }
                }
            break;

            // case 'guild':
            //     if(args[1] === raid || args[1] === upgrade) {
            //         if(onLbCD.has(message.author.id)) {
            //             message.reply("your LOOTBOX is on cooldown!")
            //         }
            //         else{
            //             if(autoRemind.has(message.author.id)) {
            //                 message.reply("Only testing: you will be notified when LOOTBOX is ready!");
        
            //                 onLbCD.add(message.author.id);
            //                 setTimeout(() => {
            //                     onLbCD.delete(message.author.id)
            //                     message.reply("LOOTBOX READY")
            //                 }, 10800000)
        
            //             } else { 
            //                 onLbCD.add(message.author.id);
            //                 setTimeout(() => {
            //                     onLbCD.delete(message.author.id)
            //                 }, 10800000)
                    
            //             }    
            //         }
            //     }
            // break;

            case 'withdraw':
                message.reply("don't you dare gamble with that!")
            break;

            case 'deposit':
                message.reply("good boi")
            break;
        }
    }
})

bot.login(process.env.token);
