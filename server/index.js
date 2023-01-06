import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import fishRoutes from './routes/fishRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import { Client, GatewayIntentBits, SlashCommandBuilder,  Routes, ActivityType  } from 'discord.js';
import fetch from 'node-fetch';
import { REST } from '@discordjs/rest';


dotenv.config();

const App = express();
App.use(express.json());

App.use(cors());
App.use('/fishes', fishRoutes);
App.use('/users', userRoutes);

App.use(bodyParser.json({ limit: "100mb", extented: true}));
App.use(bodyParser.urlencoded({ limit: "100mb", extended: true}));


const PORT = process.env.PORT;

try {
    App.listen(PORT, () => console.log(`Server berjalan pada http://localhost/${PORT}`));
} catch (error) {
    console.log(`${error}, tidak dapat terhubung!`);
}


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildPresences ]});

client.on('ready', () => {
    console.log(`${client.user.tag} sudah daring!`);

    const activities = [
      'Gulp Gulp!',
      'Fish Information',
      'Fish Heree!!'
    ]

    setInterval(() => {
      const status = activities[Math.floor(Math.random() * activities.length)];
      client.user.setPresence({ activities: [{ name: `${status}`}]});
    }, 3000)
});


async function fishlogiDiscord() {
    const url = "http://localhost:5000/fishes";
    await fetch(url).then((response) => { return response.json()}).then((data) => {
        let fishes = data;
        const fishlogiDefinitionCommand = new SlashCommandBuilder().setName('definition').setDescription('Definition of Fishlogi!');

        const findingFishCommand = new SlashCommandBuilder()
          .setName('find')
          .setDescription('Find a fish information!')
          .addStringOption(option => option.setName('name').setDescription('Input a fish name! e.g Tongkol, Mas, Patin, etc.'));  
        
        const commands = [
          fishlogiDefinitionCommand,
          findingFishCommand,
        ];
        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

          async function slashCommand(){
            try {
          
              await rest.put(Routes.applicationCommands(process.env.DISCORD_BOT_ID), {
                body: commands,
              });
          
              console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
              console.error(error);
            }
        }; slashCommand();
          
        client.on('interactionCreate', async(interaction) => {
          if (!interaction.isCommand()) return
          if (interaction.commandName === 'definition') {
            await interaction.reply({ content: 'Fishlogy is a bot where we can find information about fish. starting from the description of fish, fish species, fish type, fish habitat, to fish endemic areas.',  fetchReply: true });
        }
        });

        Object.keys(fishes).forEach(function(key) {

          client.on('interactionCreate', async(interaction) => {
            const reason = interaction.options.getString('name')?? 'Dont have input fish name';
            if (!interaction.isCommand()) return
            if (interaction.commandName === 'find') {
              if(reason === fishes[key].name) {
                await interaction.reply({ content: fishes[key].desc,  fetchReply: true });
              } 
          }
          });
          
            client.on("messageCreate", (message) => {
                if(message.content === `/Ikan ${fishes[key].name}`) {
                    message.channel.send(`${fishes[key].desc}.`)
                }
            });
        });
    });   
};


fishlogiDiscord();


client.login(process.env.DISCORD_BOT_TOKEN);