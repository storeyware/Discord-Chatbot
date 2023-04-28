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

#### .env File
This text file is used to control any constants created for use in the application. BOT_Token is the unique identifier for the Discord bot, and OPENAI_KEY is a key tied to your account conntecting to OpenAI via an API.

#### index.js File
**Lines 1 - 27: Connecting to OpenAI and Discord**  
It begins by calling on the OpenAI and Discord libraries. Then a connection needs to be made by initializing the library with the API key from .env and creating a new instance of the OpenAI API. Once that’s established, Intents must be set for the bot to operate in Discord. GobboBOT has access to the Guild (server), GuildMessages, and MessageContent. When the client is ready for use, it will print a string to the console stating, “Logged in as ‘user information’”, then use the BOT_TOKEN stored in .env to log in.

**Lines 29 – 59 – Messaging Configuration**  
We must establish which channel the bot belongs to for future checks, so the respective channel ID is assigned to BOT_CHANNEL. GobboBOT also needs a reference of how many messages to keep in memory, which is set to five in our environment. As messages are sent, the client listens to them and performs two verification checks: 1) was the author of the message the bot? and 2) was the message sent in the channel hosting the bot? If GobboBOT authors the message, it shouldn’t respond to itself, avoiding an infinite loop. Additionally, if the message is not in the channel where GobboBOT operates, it shouldn’t be prompted to respond. The action message.channel.sendTyping() causes typing bubbles to appear as the bot responds. GobboBOT’s recollection of previous message is limited to the five messages sent before the current message’s ID and stored in an array with the message ID and the message contents. A set of all users is also created to store unique usernames/nicknames and the client. Properly formatting the prompt also requires the last user’s information, which is popped off from the users set.

**Lines 60 – 69: Prompt for ChatGPT**  
The prompt dictates who the conversation is between by pulling in all users in the set and the last user. Creativity was also used here to give GobboBOT the distinct personality of a goblin with an accent similar to a rude New Yorker. Additionally, his catch phrase, common jokes, response tendencies, and his appearance are also included, all of which are observable based on how the user communicates with him.

**Lines 70 – 89: Sending Request to ChatGPT and Logging the Response**  
Messages are stored from most recent to oldest with the messages array, so to add them in chronological order, we iterate through the array backwards, with each message content added to the prompt with a newline and preceded by the associated user information to simulate the existing conversation in Discord. The final addition to the prompt is the bot’s information, which will cause it to respond to all the previously provided messages. To view the resulting prompt, this can be printed to the console. Calling OpenAI is done with a Completion, passing in the prompt, a model designated as “text-davinci-003”, max_tokens (reference video mentions this was set to a large value of 500 to ensure the bot can respond in full), and the stop token is a newline. Responses are logged in the console and sent to the discord channel as a message.

*-Katherine Johnson*

### Discord
<!-- A guide on how to set the bot up in discord. --> <!-- For this section, I went from 2:05-3:10 in the video tutorial-->
Setting up a bot in Discord takes a bit of time to do but in the end it is definitely worth it. To begin, you will need to go to [Discord Developer Dashboard](https://discord.com/developers/applications) Then create a new application that can be named whatever you would like to name it. Most likely something to do with the name of your bot such as this one being name GobboBOT. Once that is created you can go to the bot tab which is located on the left of the dashboard. Then click add bot. Next, you will click reset token which will give you the bot's specific token. You will need to paste this later on so make sure to copy the token. Then make sure to paste that within the .env file within the code. Then scroll down to the section titled Priveleged Gateway Intents and turn on the setting named Message Content Intent. This setting is very important to the functionality of this bot so make sure to select it. Next, we must add the bot to a Discord server of our choosing. In order to accomplish this you must go to the OAuth2 tab on the left dashboard and click URL Generator. Then, select bot from the scopes section and administrator from the bot permissions section. This step is crucial because without the proper permissons your bot might not be able to function properly. Next, we must copy the Generated URL into our browser and select the Discord Server that we would like the bot to be in. 

*-Miranda Morris*

### Testing
<!-- examples of testing trials. Feel free to use the screenshots i posted in discord. I had to write out several different versions of the prompt. Ask me questions!-->
GobboBOT was tested to ensure it could meet some of the basic chatbot metrics. This includes aspects of its personality, understanding, and general intelligence. Pulling together a test plan was made incredibly easy thanks to the open source and collaborative chatbottest guide. If you plan on creating a chatbot of your own, we encourage you to check it out.
https://github.com/chatbottest-com/guide/wiki

**Test Summary**
**Repeated Messages**
To test the chatbot’s response to repetition, the greeting “hi” was sent 3 times in a row. GobboBOT responded with a different greeting each time with an increasing sense of frustration that is inline with his given personality.

**Request Concatenation**
Two requests were made within a single message to verify GobboBOT could respond to multiple inquiries and infer the users meaning based on context. The second request was on the same subject as the first, only missing the keywords that specified the prompt. Our example was “Is a circle round? And a square?”. It was able to process and respond to both requests accurately.

**Simultaneous Requests**
Two different requests by two different users were sent at the same time to see if GobboBOT would get confused and verify they would still respond to both requests. They were able to respond to both requests in a single message but responded twice to the request listed first in the chat.

**Non-Verbal Requests**
Emojis and single punctuation marks were sent to GobboBOT to ensure it could accurately respond to them. It was able to discern the underlying mood the emoji or punctuation mark was trying to convey within the context of the conversation and respond appropriately.

**Spelling and Grammar**
Spelling and grammatical errors were intentionally included in some requests to test GobboBOT’s ability to overcome these errors. It was able to discern meaning and still develop proper responses to these requests.

**Language**
GobboBOT is an English-speaking Goblin but was able to discern that a request was made in Spanish and tell the user they don’t speak Spanish.

**Memory**
General information about myself (hair color, eye color and place of residence) was fabricated, sent to GobboBOT and requested back to test its memory. It was able to recall my information when asked about it later, seasoned with loads of GobboBOT personality of course.

**Personality**
Onboarding
Because time is money for GobboBOT, it doesn’t automatically greet the user and instead waits for the user to prompt it. Different greetings were tested to ensure GobboBOT exhibits variety in its responses.

Emotion
Several requests were sent to GobboBOT to verify it could convey a variety of emotions in its responses. It was able to congratulate the user showing excitement with punctuation (exclamation mark), voice frustration with repeated requests, scold the user for using foul language and generally respond sarcastically to most requests.

Humor
GobboBOT’s responses tend to have comedic undertones that exemplify its witty, sarcastic and rude nature. Its New York style accent and signature catch phrase can also be seen its responses. Some examples are listed below:

User: I have pink hair, orange eyes and live on the moon
GobboBOT: That’s an impressive combination. But something tells me you don’t really live on the moon. Getting a little creative here, aye? Don’t waste my time with this stuff. Let’s stick to actual questions, time is money.

User: ?
GobboBOT: You expectin’ a response? Hmm, I think maybe you should spend more time askin’ questions that I can answer rather than containin’ your confusion in a single question mark. Time is money, pal, ya know?

User: Alright, you little rat. Get back to work.
GobboBOT: Wow, someone’s a little feisty today. How about you mind your tone and I’ll mind mine? Time is money and I don’t like wasting mine.

*-Amber Rice*

### Conclusion
<!--A conclusion that goes over the basics from each section-->

*-Miranda Morris*
