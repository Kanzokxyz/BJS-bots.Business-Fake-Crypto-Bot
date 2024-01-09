/*CMD
  command: 👫 Invite
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /invite
  group: 
CMD*/

var perref = "1" // Amount User Gets Per Refer
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}

let invLink = RefLib.getRefLink(bot.name, "ID")


if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}

Api.sendMessage({
  text:
    "<b>👥 Total Refers : " +
    RefLib.getRefCount() +
    " Users \n\n🎁 Your Invite Link : " +
    invLink +
    "\n\n🎉 Invite to Earn "+perref+" TRX Per Invite</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "🔍 My Refers", callback_data: "/myrefers" },{ text: "🔥 Top List", callback_data: "/toplist" }]]
  }
})
