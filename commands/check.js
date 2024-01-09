/*CMD
  command: check
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

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  User.setProperty("userStatus", user, "string")
  Bot.runCommand("testbonus")
  Bot.runCommand("/start#1")
}
if (user == "left") {
  Bot.sendMessage("*⚠️ You Must Join All our channel and our promoters channel*")
}
