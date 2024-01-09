/*CMD
  command: /startqaajaj
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

var cap = Bot.getProperty("Captcha","On")
if(cap=="undefined"||cap=="On"){
Api.sendMessage({
  text: "*🔰 Welcome*",
  parse_mode: "Markdown",disable_web_page_preview: true,
  reply_markup: JSON.stringify({
    hide_keyboard: true
  })
})
let num = Libs.Random.randomInt(1,10)
User.setProperty("iv",num,"string")
let main = 48
//Don't Edit Value Of Main
var link = main+num
var url = "https://t.me/DonationWallet/"+link+""
Api.sendPhoto({
photo:url,
caption:"🔎 Choose the correct figure matching the image",is_reply:true,
parse_mode : "Markdown" , reply_markup: { inline_keyboard:
[[{text:"📦",callback_data:"/verify 1"},{text:"🕯",callback_data:"/verify 2"},{text:"✒️",callback_data:"/verify 3"},{text:"👑",callback_data:"/verify 4"},{text:"🎾",callback_data:"/verify 5"}],[{text:"⛵️",callback_data:"/verify 6"},{text:"🧔",callback_data:"/verify 7"},{text:"🦁",callback_data:"/verify 8"},{text:"🚌",callback_data:"/verify 9"},{text:"😂",callback_data:"/verify 10"}]]},disable_web_page_preview:true
});
}else{
Bot.runCommand("/startqap")
}
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
