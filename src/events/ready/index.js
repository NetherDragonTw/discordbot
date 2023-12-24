import { Events } from "discord.js"

export const event = {
    name: Events.ClientReady,
    once: true
}

export const action = (c) => {
    console.log(`loggen as ${c.user.tag}`)
}