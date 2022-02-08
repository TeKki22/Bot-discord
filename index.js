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
            .setColor("GOLD")
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
            .setColor("WHITE")
            .setTitle("__LISTE DES DONJONS__")
            .setDescription("Choisissez le donjon que vous voulez")
            .addField("__Trône Brisé__", "[ Strat](https://www.youtube.com/watch?v=J8Lrsjw4osA&t=1042s)\n [Coffres cachés](https://www.youtube.com/watch?v=1df35rVWUCI)")
            .addField("__Fosse de l'Hérésie__", "[ Strat et Coffres cachés](https://www.youtube.com/watch?v=XygFFFeMvhc&t=480s)")
            .addField("__Prophétie__", "[ Strat](https://youtube.com/playlist?list=PLcm8uKhXeKKy8xXns6hFQPcGm0_AbSY-y)\n [Coffres cachés](https://www.youtube.com/watch?v=0c5D_pn-yRs)\n [Objets à récupérer](https://www.youtube.com/watch?v=lzcvuw7vA6k)")
            .addField("__Étreinte de l'Avarice__", "[ Strat](https://www.youtube.com/watch?v=Fr4UFHe98Kc)\n [Coffres cachés](https://www.youtube.com/watch?v=CJq3T5A8Jag)\n [Messages à récupérer (pour le passereau)](https://www.youtube.com/watch?v=s6nbiVZ-PFI)")

        message.channel.send({ embeds: [embed]});
    }
    else if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("__LISTE DES COMMANDES__")
            .setDescription("Voici les commandes disponibles")
            .addField("__!raid__", "[Permet d'avoir toutes les infos sur le raid que vous voulez]()")
            .addField("__!donjon__", "[Permet d'avoir toutes les infos sur le donjon que vous voulez]()")
            .addField("__!liens__", "[Permet d'afficher tous les liens utiles pour Destiny]()")
            .addField("__!build__", "[Permet de voir des builds différents pour chaque classe]()")

        message.channel.send({ embeds: [embed]});
    }
    else if (message.content === prefix + "liens"){
        const embed = new Discord.MessageEmbed()
            .setColor("DARK_GREEN")
            .setTitle("__LIENS UTILES POUR DESTINY__")
            .addField("__Petite Lumière__", "[Application téléphone qui permet de gérer son inventaire et de voir les gods rolls des armes]()")
            .addField("__DIM__", "[Permet de gérer ses personnages, créer des builds et les optimiser, sauvegarder un équipement entier et l'équiper rapidement]()\n[__Lien ici__](https://app.destinyitemmanager.com)\n [Vidéo explicative](https://www.youtube.com/watch?v=qoVbJ1dZEow)")
            .addField("__Destiny Recipes__", "[Site pour aider à se préparer aux nouvelles saisons]()\n [__Lien ici__](https://destinyrecipes.com)")

        message.channel.send({ embeds: [embed]});
    }
    else if (message.content === prefix + "build"){
        const embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("__BUILDS POUR CHAQUE CLASSE__")
            .addField("__Build Chasseur__", "[__Lien ici__](https://m.jeuxvideo.com/forums/42-33957-64862309-1-0-1-0-builds-pour-chasseur.htm)")
            .addField("__Build Arcaniste__", "[__Lien ici__](https://m.jeuxvideo.com/forums/42-33957-64888267-1-0-1-0-builds-pour-arcaniste.htm)")
            .addField("__Build Titan__", "[__Lien ici__](https://m.jeuxvideo.com/forums/42-33957-64871088-1-0-1-0-builds-pour-titan.htm)")
        message.channel.send({ embeds: [embed]});
    }
});









Client.login(process.env.TOKEN);