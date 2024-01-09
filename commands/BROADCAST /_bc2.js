/*CMD
  command: /bc2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BROADCAST 
  answer: ♨️ Enter Message

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6223418489"
if (user.telegramid == key){
var fullBotUsers = Bot.getProperty("wholeUsers")
if (message.length > 10000) {
  Bot.sendMessage("🚨 Message Is Too Big...")
 Bot.runCommand("/bcbutton") 
return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  var polll = [[{text:"🚀 FREE CRYPTO 2 🚀", url:"https://t.me/+ewuasJlzulQ2NzBl"}]]  
  Api.sendMessage({
    chat_id: info,
    text: ""+message+"",
    parse_mode: "markdown", 
    disable_web_page_preview: true, 
    reply_markup:{inline_keyboard: polll}
  })
}
Bot.sendMessage("*🚀 Message Have Been Delievery...\n🚀 Broadcast : 2*")
}else{
Bot.sendMessage("*❌You Are Not An Admin !*")
}
