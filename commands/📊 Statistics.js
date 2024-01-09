/*CMD
  command: 📊 Statistics
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

var stat = Bot.getProperty("" + user.telegramid + "?Ban")
if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
} else {
  var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  var stats =
    "<b>📊 Bot Live Stats 📊\n\n📤 Total Payouts : "+payouts.value().toFixed(2)+" TRX\n\n💡 Total Users: "+status.value().toFixed(0)+" Users\n\n🔐 Distribution date : Disable</b>"

  Api.sendMessage({
    text:stats, 
    parse_mode:"html", 
    disable_web_page_preview: true
  })
}
