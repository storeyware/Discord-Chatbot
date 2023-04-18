# Discord Chatbot <img height="20" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-2048x2048.png"/>


**CSCI280: Artificial Intelligence**
<img align="right" height="160" src="https://github.com/storeyware/Discord-Chatbot/blob/main/gobCackle.png?raw=true" alt="image of GobboBOT, a goblin cackling in the air"/>

*Instructor: Dr. Naiwei Liu*

### Colaborators:
##### Nathan Storey, Katherine Johnson, Miranda Morris, and Amber Rice

---

This README.md acts as the deliverables for our discord chatbot implementation of OpenAI's chatGPT. The index.js portion of this assignment was completed by following a YouTube guide by username [Niconiconnii](https://www.youtube.com/watch?v=hkMWVrhGorI) and we encourage you to follow the link to their channel.
#

### The Goblin
I used to make YouTube videos and stream myself doing activities like playing videogames and working on digital illustrations. In my streaming days, I had a chatbot that had some simple tasks such as posting my social media links in chat at various intervals and answering commands like !joke by pulling a string from my desktop and dropping it in the life chat for my viewers to enjoy. Eventually I went to school for Computer Science where secretly I hoped to give my little bot a voice using artificial intelligence. This project is that dream's implementation.

As a fan of goblin lore in various forms of fantasy, I wanted to give GobboBOT a personality to match what I pictured all those years ago. As such he must have the following traits:
- He's got a goblin accent (I'm using the World of Warcraft goblin accent which is similar to a stereotypical New Yorker)
- He's witty, sarcastic, and rude
- He has catch phrases like "Time is money!"
- He knows what he looks like. Short and purple with long pointed ears.

*-Nathan Storey*

### The Code
<!-- start with walking through the guide in the youtube link perhaps? We'll have to talk about openAI and show snippits of the code. Particularly the prompt. -->

### Discord
<!-- A guide on how to set the bot up in discord. --> <!-- For this section, I went from 2:05-3:10 in the video tutorial-->
Setting up a bot in Discord takes a bit of time to do but in the end it is definitely worth it. To begin, you will need to go to [Discord Developer Dashboard](https://discord.com/developers/applications) Then create a new application that can be named whatever you would like to name it. Most likely something to do with the name of your bot such as this one being name The Goblin. Once that is created you can go to the bot tab which is located on the left of the dashboard. Then click add bot. Next, you will click reset token which will give you the bot's specific token. You will need to paste this later on so make sure to copy the token. Then make sure to paste that within the .env file within the code. Then scroll down to the section titled Priveleged Gateway Intents and turn on the setting named Message Content Intent. This setting is very important to the functionality of this bot so make sure to select it. Next, we must add the bot to a Discord server of our choosing. In order to accomplish this you must go to the OAuth2 tab on the left dashboard and click URL Generator. Then, select bot from the scopes section and administrator from the bot permissions section. Next, we must copy the Generated URL into our browser and select the Discord Server that we would like the bot to be in. 

*-Miranda Morris*

### Testing
<!-- examples of testing trials. Feel free to use the screenshots i posted in discord. I had to write out several different versions of the prompt. Ask me questions!-->

### Conclusion
<!-- shit idk.. suggestions? -->
