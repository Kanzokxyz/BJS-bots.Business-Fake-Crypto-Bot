/*CMD
  command: /mainmenu1358
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

var refAmount = parseFloat(1) //Per Refer Amount You want to Add to Referrer
var userStat = User.getProperty("userStatus")

if (!userStat | (userStat == "left")) {
  Bot.runCommand("/start")
  return
} else if (
  (userStat == "member") |
  (userStat == "administrator") |
  (userStat == "creator")
) {
  var referCount = User.getProperty("ReferStatus")
  if (referCount == undefined) {
    let refUser = RefLib.getAttractedBy()
    if (refUser) {
      var refbal = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      refbal.add(refAmount)
      Api.sendMessage({
        chat_id: refUser.telegramid,
        text:
          "🎉 You have received 1 TRX from "+user.first_name+" - REFER PROGRAM",
        parse_mode: "html"
      })
      User.setProperty("ReferStatus", "valid", "string")
    }
  }
  
  if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}

  Bot.sendKeyboard(
    "💰 Balance, 👫 Invite\n 🗂 Wallet, 🎁 Bonus, 📤 Withdraw\n📊 Statistics",
    "*🏡 Welcome To Main Menu*"
  )
}
