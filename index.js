// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./config.json');
var DateCalculator = require('date-calculator');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

// Create a new client instance
const client = new Discord.Client({ intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
] });




const prefix = "beubeu ";
const fetch = require('node-fetch');

// When the client is ready, run this code (only once)
client.on("ready", () => {
	console.log('Ready!');
    client.user.setActivity("beubeu aled")

});

function TimerVacance(){
    const t = new Date();
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    const time = `${date}/${month}/${year}`;

    console.log(time);

    var dc = new DateCalculator(new Date(2022,07,14));
    console.log(dc.sub(new Date(year,month,date)).years);
    console.log(dc.sub(new Date(year,month,date)).months);
    console.log(dc.sub(new Date(year,month,date)).days);
 }

 
client.on("messageCreate",async message => {
    if(message.author.bot)return;

    if(message.content === prefix + "ping"){
        message.reply("pong");
    }
    else if(message.content === prefix + "?"){
        message.reply( message.content + "??");
    }
    else if(message.content === prefix + "montre moi un chat"){
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.reply({files: [file]});
    }
    else if(message.content === prefix + "Allan?"){
        message.reply("Allan est une éspèce rare, il aime manger, boire et le Z, mais tkt on t'aime bien");
    }
    else if(message.content === prefix + "Benoit?"){
        message.reply( "Beubeu ? C'est le boss, tout simplement... ");
    }
    else if(message.content === prefix + "Michel?"){
        message.reply("Michel ou Michael ou encore DJ MICK! adore la musique MAIS SURTOUT LES VACANCES D'ETE !!, il est un peut con aussi...");
    }
    else if(message.content === prefix + "Mathieu?"){
        message.reply("Ce type est térrifiant <:japanese_ogre:979430602841411596>");
    }
    else if(message.content === prefix + "Valentin?"){
        message.reply("txt");
    }
    else if(message.content === prefix + "hymne"){
        message.channel.send(";;play https://www.youtube.com/watch?v=GLi-UF9U-RI&ab_channel=ScorpioMusic");
    }
    else if(message.content === prefix + "aled"){
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Commandes pour t aider gros naze')
        .setThumbnail('https://www.radiolaser.fr/photo/art/default/2351901-3291321.jpg?v=1289667001')
        .addFields(
            { name: 'Nombre de jours avant les vacances', value: 'beubeu vacances ?' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Description de quelqu un', value: 'beubeu [Prenom de la personne]', inline: true },
            { name: 'Mon hymne', value: 'beubeu hymne', inline: true },  
        )
//azdqscqscqscqsc
        message.reply({embeds : [embed]} );
    }
    else if(message.content === prefix + "vacances ?"){

        const t = new Date();
        const date = ('0' + t.getDate()).slice(-2);
        const month = ('0' + (t.getMonth() + 1)).slice(-2);
        const year = t.getFullYear();
        var dc = new DateCalculator(new Date(2022,07,14));
        console.log(dc.sub(new Date(year,month,date)).years);
        console.log(dc.sub(new Date(year,month,date)).months);
        console.log(dc.sub(new Date(year,month,date)).days);

        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Temps avant les vacances')
        .setDescription('Il reste ' + dc.sub(new Date(year,month,date)).days +' jours avant les vancaes !')

        message.reply({embeds : [embed]});


     }
     else if (message.content === prefix + "voc") {
        const channel = client.channels.get("mychannelid");
        if (!channel) return console.error("The channel does not exist!");
        channel.join().then(connection => {
          // Yay, it worked!
          const dispatcher = connection.play('./Benoit_Tourne.mp3');
            dispatcher.on("end", end => {});
            voiceChannel.leave();
          console.log("Successfully connected.");
        }).catch(e => {
          // Oh no, it errored! Let's log it to console :)
          console.error(e);
        });
        }; //Fin if 

})


// Login to Discord with your client's token
client.login(token);



/*var voiceChannel = message.member.voice.channel;
voiceChannel.join().then(connection =>{}).catch(err => console.log(err));
const dispatcher = connection.play('./Benoit_Tourne.mp3');
dispatcher.on("end", end => {});
voiceChannel.leave();*/