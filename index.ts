import { events } from "bdsx/event"


events.playerJoin.on(async (event) => {
    const xp = {
        "2020": 18021,
        "2021": 18031,
        "2022": 18039,
        "2023": 18048,
        "2024": 18057,
        "2025": 18066,
        "2026": 18076,
        "2027": 18084,
        "2028": 18093,
        "2029": 18102
    }

    const now = new Date()
    const year = new Date(now.getFullYear(), 0, 1)
    event.player.runCommand(`xp -9999L @s`)
    event.player.runCommand(`xp ${now.getFullYear()}L @s`)
    //@ts-ignore
    event.player.runCommand(`xp ${Math.round(((Date.now() - Number(year)) / (Number(new Date(now.getFullYear() + 1, 0, 1)) - Number(year))) * xp[now.getFullYear().toString()])} @s`)
})