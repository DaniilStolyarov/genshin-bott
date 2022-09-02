const VkBot = require('node-vk-bot-api');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const TOKEN = "753c817d570e513deef3172feba21171596b1fa28a8f3d384548fae344d2491c4c25399f79f6d3bad1820"
const bot = new VkBot(
    {
        token : TOKEN,
        confirmation: 'c84d54ae'
    }
);
bot.on((ctx) => {
    if (ctx.message.text.includes('дед очнись'))
    {
        ctx.reply('грррх..')
    }
    else
    {
        console.log(ctx)
    }
  });
  
  app.use(bodyParser.json());
  
  app.post('/', bot.webhookCallback);
  
  app.listen(3000);