/*CMD
  command: /withdraw2fakedate
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

var maxwith = parseFloat(2) //Maximum Withdraw Anount in place of 15
var minwith = parseFloat(0.1) //minimum withdraw amount in place of 10
var channel = "@payisland" //<------- your channel username with "@"
var stat = Bot.getProperty("" + user.telegramid + "?Ban")
if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
} else {
  var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global")
  var user_link = Libs.commonLib.getLinkFor(user)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("wallet")
  var balance = Libs.ResourcesLib.userRes("balance")
  if (message < minwith) {
    Bot.sendMessage("_❌ Minimum Withdraw " + minwith + " BNB_")
  } else if (message > maxwith) {
    Bot.sendMessage("❌ * Maximum Withdraw: " + maxwith + " BNB*")
    return
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "❌ *Balance Not Enough!*\n🎃 _Enter Amount Below Or Equal to " +
          balance.value().toFixed(2) +
          " BNB_"
      )
    } else {
      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      }
      var value = message
      if (!isNumeric(value)) {
        Bot.sendMessage(
          "*❌ Invaild value. Enter only numeric value. Try again*",
          {
            is_reply: true
          }
        )
        return
      }
      balance.remove(parseFloat(message))
      payouts.add(parseFloat(message))
      Bot.sendMessage(
        "*☑️ Transaction Successfully\n\nℹ️ Transaction Details : \n💸 Amount : " +
          message +
          " BNB \n💳 Wallet : " +
          wallet +
          "\n\n📫 Wait And Check Again At 30 NOV 2023\n\n⚠️ Important*\n⚰️ _If You Do Fake Refer, You Will Banned_\n\n*🗃 Payment Channel : @payisland\n\n🔐 Distribution date : 30 NOV 2023*"
      )

      Api.sendMessage({
        chat_id: channel,
        text:
          "<b>ℹ️ New  Transaction\n\n☑️ Status : Success\n🔰 User :</b> <a href='tg://user?id=" +
          user.telegramid +
          "'>" +
          user.first_name +
          "</a><b>\n🆔 User ID : " +
          user.telegramid +
          "\n💸 Amount : " +
          message +
          " BNB\n🎭 User Referrals : " +
          Libs.ReferralLib.getRefCount()  +
          "\n\n💳 Address :\n" +
          wallet +
          "\n\n🤖 Bot :\n@" +
          bot.name +
          "\n\n🔐 Distribution date : 30 NOV 2023</b>",
        parse_mode: "html",
        disable_web_page_preview: true
      })
    }
  }
}
