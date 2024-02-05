//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  
    
if (/^hola$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (!chat.isBanned && m.text.match(/(Jejeje)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Jejeje.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(brr|Brr)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Brr.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(añañin|Añañin)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Añañin.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Compartan|compartan)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Compartan.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(epico|épico|Epico|Épico)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Épico.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Te amo|te amo|teamo)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Te-amo.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/gemi2.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(tu no mete|Tu no mete|Tú no mete|tú no mete)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Tu no mete.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(martes|Martes)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Martes.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

    
return !0 }
export default handler
