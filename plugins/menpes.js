/**
 * Jangan Di Hapus!!
 * 
 * Buatan Zenss
 * Github: https://github.com/RaaaGH
 * 
 *
 *
 * Gatau Males Pengen Beli Truk
 *GW TAU GW KASI WM NNTI JUGA DI HAPUS 🗿🤟
 *
 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Nama|Halo.\n\n「 KaguyaMD  」`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Bapakmu|Halo.\n\n「 𝙰𝚕𝚋𝚎𝚍𝚘-𝙱𝙾𝚃 」`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `Halo Kak @${data.jid.split('@')[0]}, Kamu Dapet Pesan Menfess Dari Orang Yang Tidak Ingin Disebut Namanya\n⭔Pesan: \n${pesan}\n\nMau Balas Pesan Ini? Geser Pesan Ini Aja Ya Kak! Jangan Pencet Button Dibawah Nanti Ngebug!.`.trim();
        await conn.sendButton(data.jid, txt, wm, 0, [['Jangan Pencet Button!', '.balasmenfess']], null)
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('eror');
    }
}
handler.tags = ['menbalas']
handler.help = ['menfes'].map(v => v + ' <nomor|nama|pesan>')
handler.command = /^(confess|menfess)$/i
handler.private = true

export default handler