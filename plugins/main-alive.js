

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://cdn.jsdelivr.net/gh/Guru322/GURU-BOT@main/Assets/mp3/Alive.mp3"
    let url = "https://github.com/LuciZR/Mia-Md"
    let murl = "https://chat.whatsapp.com/HuQXSSgC80hERPfi4D4D2i"
    let img = "https://i.imgur.com/ffvmXK8.jpeg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "___🥏🦋🐉𝆺𝅥⃝🤴🏿⃟≛⃝𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙏𝙤 𝘾𝙤𝙣𝙣𝙚𝙘𝙩 ᵈᵃⁿᵍᵉʳ ᶻᵒⁿᵉ👾  ❤‍🩹𝆺𝅥⃝🕊𝄟✮⃝❤‍🩹✨🪀___.                    My Owner Number+918293838182",
          body: "𝑴𝑰𝑨 𝑴𝑫",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/HuQXSSgC80hERPfi4D4D2i',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
