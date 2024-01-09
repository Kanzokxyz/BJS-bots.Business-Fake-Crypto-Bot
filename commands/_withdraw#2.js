/*CMD
  command: /withdraw#2
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

var characters = "1234567890abcdefghijklmnopqrstuvwxyz"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("b",generateString(61), "string")
let b = Bot.getProperty("b")
var bs = Bot.getProperty("b") // fake hash
var maxwith = parseFloat(100) //Maximum Withdraw Anount in place of 15
var minwith = parseFloat(5) //minimum withdraw amount in place of 10
var channel = "@BikersPayout" //<------- your channel username with "@"
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
    Bot.sendMessage("_❌ Minimum Withdraw " + minwith + " TRX_")
  } else if (message > maxwith) {
    Bot.sendMessage("❌ * Maximum Withdraw: " + maxwith + " TRX*")
    return
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "❌ *Balance Not Enough!*\n🎃 _Enter Amount Below Or Equal to " +
          balance.value().toFixed(2) +
          " TRX_"
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
        "*☑️ Transaction Successfully*"
      )

     // Api.sendMessage({
   //     chat_id: channel,
  //      text:
 //         "<b>🏁 New Withdraw Have Been Sended\n\n☑️ Status : Success\n\n🆔 User ID : " +
 //         user.telegramid +
 //         "\n\n💸 Amount : " +
  //        message +
//          " TRX\n\n🎭 User Referrals : " +
 //         Libs.ReferralLib.getRefCount()  +
//          "\n\n💳 Address :\n" +
 //         wallet +
   //       "\n\n🚀 TXID / HASH : "+ bs +"\n\n🤖 Bot :\n@" +
   //      bot.name +
  //        "</b>",
  //      parse_mode: "html",
   //     disable_web_page_preview: true
 //     })
      Api.sendMessage({
        chat_id: channel,
        text:
          "<b>🚀 New Payment Successfully Paid 🚀\n\n🆔 ID : "+ user.telegramid +"\n✅ Addess : </b><code>"+ wallet +"</code>\n💸<b> Amount : "+ message +" TRX\n🖇 HASH - "+bs+"\n\n⛽ BOT LINK -\n@"+ bot.name +"</b>",
        parse_mode: "html",
        disable_web_page_preview: true
      })
    }
  }
}
