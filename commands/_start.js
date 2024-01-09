/*CMD
  command: /start
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

// var button = [{title: "✅ Joined", command:"/joined"}] 
// Bot.sendInlineKeyboard(button,"*🔎 📚 Complete Some Mandatory Task For Claiming Our Airdrop :-*\n➖➖➖➖➖➖➖➖➖➖➖\n\n⚜ *Join* @Bot_Deals\n\n➖➖➖➖➖➖➖➖➖➖➖\n⛱ *Join Payment Channel*: @AirdropBotPayout\n📹 *Join Backup Folder*:\nhttps://t.me/addlist/ooXHZ8LDAo5lYmVl\n🎏 *Join Twitter* :\n➖➖➖➖➖➖➖➖➖➖➖\n🛃 *After Complete All Mandatory Task.\nClick On 🚀 Joined*")
Api.sendMessage({
  text:
    "<b>❗ Must Join All The Channels Before Continue Using The Bot\n\n➡️ @VerifiedBots_Only\n➡️ @AirdropOfficer\n➡️ @EnaBots\n➡️ @Thunder_drop\n➡️ @TechxAirdrops\n➡️ @TigerHustlePack\n➡️ @TechBusterz\n➡️ @CarlXCrypto\n➡️ @AirdropsUniques\n\n🅿️AYOUT @BikersPayout\n\n❗ After Joining, Click On '✅ Joined' </b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "🚀 Joined", callback_data: "/joined" }]]
  }
 })

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
