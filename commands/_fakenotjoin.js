/*CMD
  command: /fakenotjoin
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

var button = [{ title :"✅ Done", command : "/fakenotjoin2" }]
Bot.sendInlineKeyboard(button ,"*⚠️ Error! Error! Error!\n❌ Look like you not joining our promoters and our main channel!\nℹ️ Please check it again*")
