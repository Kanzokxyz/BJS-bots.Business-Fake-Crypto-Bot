/*CMD
  command: fakingqa
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

var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
stat.add(3) 
Bot.sendMessage("😏 Fake Stat Have Been Added!")
