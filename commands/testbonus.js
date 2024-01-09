/*CMD
  command: testbonus
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

var sb = User.getProperty("Sb")
if (sb == undefined){
User.setProperty("Sb", "Received", "string")
var ba = Libs.ResourcesLib.userRes("balance")
ba.add(1)
Bot.sendMessage("🎁 +1 TRX For Joining All Our Channel!")
Bot.runCommand("/mainmenu1358")
}else{
Bot.sendMessage("*🎁 You Already Received Joining Bonus*")
Bot.runCommand("/mainmenu1358")
}
