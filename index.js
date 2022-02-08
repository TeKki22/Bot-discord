const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!raid
    if (message.content === prefix + "raid"){
        const embed = new Discord.MessageEmbed()
            .setTitle("Liste des raids")
            .setDescription("Choisissez le raid que vous voulez")
            .addField("Caveau de Verre", "[ Strat et coffres cachés](https://www.youtube.com/watch?v=mfYnMykvjJM&t=496s)\n [Objets à récupérer](https://www.youtube.com/watch?v=PG9jkHmutao&list=PLTg8yNY-9NDP5FJUgzlG1ERnTneIfVrg-&index=17)", false)
            .addField("Crypte de la Pierre", "[ Strat](https://www.youtube.com/playlist?list=PLcm8uKhXeKKzcoXylwMjv_NYCZ_seXyCe)\n [Coffres cachés](https://www.youtube.com/watch?v=Wvip7EhHgf0)", false)
            .addField("Dernier Voeu", "[ Strat](https://www.youtube.com/watch?v=Wvip7EhHgf0)\n [Coffres cachés](https://www.youtube.com/watch?v=h4ceFuHEOzg)\n [Tous les voeux](https://www.next-stage.fr/2018/09/destiny-2-comment-activer-les-15-voeux-du-mur-des-souhaits.html)", false)
            .addField("Jardin du Salut", "[ Strat](")
        message.channel.send({embeds: [embed]});
    }
});









Client.login("OTQwNTM4Njg1NTMzODUxNjUw.YgI26A.bTQk5ktMdopsa42vx86DadIxyJk");