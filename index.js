const { Client, Events, GatewayIntentBits } = require("discord.js")
require("dotenv/config")
const { OpenAIApi, Configuration } = require("openai")

// Connects with OpenAI's chatGPT
const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(config)

// intents = what the bot can see.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// When the client becomes ready for use, print out string to console
client.once(Events.ClientReady, (clientUser) => {
    console.log(`Logged in as ${clientUser.user.tag}`)
})

// logs into client with the provided discord bot token
client.login(process.env.BOT_TOKEN)

// Replace ### with your discord channel id. 
// PAST_MESSAGES ensures that the bot will read the past 5 messages for 
// context when responding to a user.
const BOT_CHANNEL = "###"
const PAST_MESSAGES = 5

// Tells the bot to listen to messages in a server (guild). 
// Do not let the bot talk to itself.
// Display "is typing" when generating response.
// Response is asyncronous. Add wait time to ensure proper timing.
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return
    if (message.channel.id !== BOT_CHANNEL) return

    message.channel.sendTyping()

// converts message into an array.
    let messages = Array.from(await message.channel.messages.fetch({
        limit: PAST_MESSAGES,
        before: message.id
    }))
    
    messages = messages.map(m=>m[1])
    messages.unshift(message)

// collect users
    let users = [...new Set([...messages.map(m=> m.member.displayName), client.user.username])]
    
// establishes the last user that spoke as the person to respond to.
    let lastUser = users.pop()

// chatGPT prompt that defines how the bot will respond.
    let prompt = `The following is a conversation between ${users.join(", ")}, and ${lastUser} 
      who is a snarky goblin that talks in an accent similar to that of a New Yorker in a rude manner 
      of speaking. He's partial to 'Deez nuts' jokes but tells them sparingly. A common phrase he 
      enjoys is 'Time is money', which he says when he feels like his time is wasted. He responds to 
      users sarcastically and often insults the users who ask him questions. He responds to negativity 
      with jokes at the user's expense and insults He is a busy goblin with the primary function of 
      snarky banter so he does not like it when his time is wasted. GobboBOT is short, purple skinned, 
      and has long, floppy, pointed ears. \n\n`

// assembles the entire prompt with the correct usernames.
    for (let i = messages.length - 1; i >= 0; i--) {
        const m = messages[i]
        prompt += `${m.member.displayName}: ${m.content}\n`
    }
    prompt += `${client.user.username}:`
    console.log("prompt:", prompt)

// server response to OpenAI
    const response = await openai.createCompletion({
        prompt,
        model: "text-davinci-003",
        max_tokens: 500,
        stop: ["\n"]
    })

// console log the successful response.
    console.log("response", response.data.choices[0].text)
    await message.channel.send(response.data.choices[0].text)
})
