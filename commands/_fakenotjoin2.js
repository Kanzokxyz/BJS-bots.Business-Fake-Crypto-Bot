/*CMD
  command: /fakenotjoin2
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

var button = [{ title :"✅ Done", command : "/joined" }]
Bot.sendInlineKeyboard(button ,"*⚠️ Error! Error! Error!\n❌ Look like you not addding our promoters and our main folder!\nℹ️ Please check it again*")
