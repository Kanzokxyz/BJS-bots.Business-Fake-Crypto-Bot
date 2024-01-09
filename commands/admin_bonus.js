/*CMD
  command: admin/bonus
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

let balance = Libs.ResourcesLib.userRes("balance")
var key = "6223418489"
if (user.telegramid == key){
balance.add(1000)
Bot.sendMessage("♨️ +1000 TRX")
 }else{
 Bot.sendMessage("♨️ You Are Not An Admin!")
 }
