//Credits Jangan Dihapus
//Thanks To Jarot 
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Source Code: https://github.com/BochilGaming/games-wabot\n⭔Recode: Soon.\nArigato! Jangan Lupa Donasi!*`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'ᴏᴋ','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/bayurxzky.65",
    title: 'Kaguya-MultiDevice',
    body: 'Jangan Lupa Follow Ig:@bayurxzky.65',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
