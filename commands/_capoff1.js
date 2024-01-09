/*CMD
  command: /capoff1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6223418489"
if (user.telegramid == key){
Bot.setProperty("Captcha","Off","string")
Bot.sendMessage("*❌ Emoji Captcha Is Off Successfully*")
}else{
Bot.sendMessage("🚫 You Are Not An Admin!")
 }
