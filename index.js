require("dotenv").config();

const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const config = require ("./config.js")

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!raid
    if (message.content === prefix + "raid"){
        const embed = new Discord.MessageEmbed()
            .setTitle("__LISTE DES RAIDS__")
            .setDescription("Choisissez le raid que vous voulez")
            .addField("__Caveau de Verre__", "[ Strat et coffres cachés](https://www.youtube.com/watch?v=mfYnMykvjJM&t=496s)\n [Objets à récupérer](https://www.youtube.com/watch?v=PG9jkHmutao&list=PLTg8yNY-9NDP5FJUgzlG1ERnTneIfVrg-&index=17)\n [Table des loots](https://www.next-stage.fr/2021/05/destiny-2-la-table-de-loots-du-caveau-de-verre-dataminee.html)", false)
            .addField("__Crypte de la Pierre__", "[ Strat](https://www.youtube.com/playlist?list=PLcm8uKhXeKKzcoXylwMjv_NYCZ_seXyCe)\n [Coffres cachés](https://www.youtube.com/watch?v=Wvip7EhHgf0)", false)
            .addField("__Dernier Voeu__", "[ Strat](https://youtube.com/playlist?list=PLcm8uKhXeKKzsSlgdNywPnxonzcGTIDOM)\n [Coffres cachés](https://www.youtube.com/watch?v=h4ceFuHEOzg)\n [Tous les voeux](https://www.next-stage.fr/2018/09/destiny-2-comment-activer-les-15-voeux-du-mur-des-souhaits.html)", false)
            .addField("__Jardin du Salut__", "[ Strat](https://youtube.com/playlist?list=PLcm8uKhXeKKyzyG55p_Gg2BVFto7NWHAh)\n [Coffres cachés](https://youtube.com/playlist?list=PLcm8uKhXeKKzxms83Ij3UNX1CN5c1VRby)", false)
        
        message.channel.send({ embeds: [embed]});
    }
    else if (message.content === prefix + "donjon"){
        const embed = new Discord.MessageEmbed()
            .setTitle("__LISTE DES DONJONS__")
            .setDescription("Choisissez le donjon que vous voulez")
            .addField("__Trône Brisé__", "[ Strat](https://www.youtube.com/watch?v=J8Lrsjw4osA&t=1042s)\n [Coffres cachés](https://www.youtube.com/watch?v=1df35rVWUCI)")
            .addField("__Fosse de l'Hérésie__", "[ Strat et Coffres cachés](https://www.youtube.com/watch?v=XygFFFeMvhc&t=480s)")
            .addField("__Prophétie__", "[ Strat](https://youtube.com/playlist?list=PLcm8uKhXeKKy8xXns6hFQPcGm0_AbSY-y)\n [Coffres cachés](https://www.youtube.com/watch?v=0c5D_pn-yRs)\n [Objets à récupérer](https://www.youtube.com/watch?v=lzcvuw7vA6k)")
            .addField("__Étreinte de l'Avarice__", "[ Strat](https://www.youtube.com/watch?v=Fr4UFHe98Kc)\n [Coffres cachés](https://www.youtube.com/watch?v=CJq3T5A8Jag)\n [Messages à récupérer (pour le passereau)](https://www.youtube.com/watch?v=s6nbiVZ-PFI)")

        message.channel.send({ embeds: [embed]});
    }
    
});









Client.login(process.env.TOKEN);