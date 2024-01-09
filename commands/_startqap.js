/*CMD
  command: /startqap
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

if (user.username != undefined) {
  var hh = "@" + user.username + ""
} else {
  var hh = ""
}
function touchingOwnLink() {
  Bot.sendMessage("")
}
function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text:
      "<b>👥 You Got a New </b><a href='tg://user?id=" +
      user.telegramid +
      "'>Referral</a> " +
      hh +
      "\n\n<i>🎁 Reward Will Be Given If Referral Joins Our Channel</i>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
function alreadyStarted() {
  Bot.sendMessage("")
}

var tracks = {
  onTouchOwnLink: touchingOwnLink,
  onAtractedByUser: attractedByUser,
  onAlreadyAttracted: alreadyStarted, 
  linkPrefix: 'ID'
}

RefLib.track(tracks)
if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean")
  var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
  stat.add(3) 
  Api.sendMessage({
    chat_id: 6223418489, //admin telegram id here
    text:
      "🎉 <b>New User Notification</b> \n\n👤<b>User:</b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> " +
      hh +
      "\n\n🆔<b> User ID :</b> <code>" +
      user.telegramid +
      "</code>\n\n🏁 <b>Total User's Count: " +
      stat.value() +
      "</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}

Bot.runCommand("/start1358")
