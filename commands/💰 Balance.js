/*CMD
  command: 💰 Balance
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

let invLink = RefLib.getRefLink(bot.name, "ID")
var balance = Libs.ResourcesLib.userRes("balance")
Api.sendMessage({
  text: "<b>👤 User : "+user.first_name+"\n\n💠  Balance  : "+balance.value()+" TRX \n\n🎁 Invite To Earn More\n\n🎉 Your Invite Link :\n"+ invLink +"</b>",
  parse_mode:"html", 
  disable_web_page_preview: true
})

Bot.runCommand("/fakewith")
