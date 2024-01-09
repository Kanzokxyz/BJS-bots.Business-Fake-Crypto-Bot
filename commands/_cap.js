/*CMD
  command: /cap
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

var buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "Off Catpcha", command: "/caoff1" },
    {title: "On Captcha", command: "/capon1" }
]
var key = "6223418489"
if (user.telegramid == key){
Bot.sendInlineKeyboard(buttons, "Captcha Setting");
 }else{
 Bot.sendMessage("♨️ You Are Not An Admin!")
 }
