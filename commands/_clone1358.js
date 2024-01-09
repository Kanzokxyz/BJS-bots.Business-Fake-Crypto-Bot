/*CMD
  command: /clone1358
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var email = message
var jon = "" + email.slice(0, 4) + "****@gmail.com"

if (!email.includes("@")) {
  var notEmailText = "<i>⚠️Pls Send a valid email / gmail adress!</i>"

  Api.sendMessage({
    text: notEmailText,
    parse_mode: "html",
    on_result: "🤖 Get Now #1"
  })
} else {
  BBAdmin.installBot({
    email: email,
    bot_id: 949357
  })
Bot.sendMessage("*✅ Bot Installed Successfully 🥳\n\n👉 Sent to " +
    email+"*\n🚀 Proof : @BOTPROOFCLAIMED141")

  var adminText =
    "<b>✅ New user installed bot\n\n👤 User : <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a>\n🚀 Email : " +
    email +
    "</b>"

  Api.sendMessage({
    chat_id: "6223418489",
    text: adminText,
    parse_mode: "html",
    disable_web_page_preview: true
  })

  var channelText =
    "<b>✅ New user installed bot\n\n👤 User : <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a>\n💌 Email : " +
    jon +
    "\n\n😍 To installed the bot,\njust send</b> <code> /start </code> at <b> here\n👉 @" +
    bot.name+"</b>"

  Api.sendMessage({
    chat_id: "@BOTPROOFCLAIMED141",
    text: channelText,
    parse_mode: "html",
    disable_web_page_preview: true
  })
}

