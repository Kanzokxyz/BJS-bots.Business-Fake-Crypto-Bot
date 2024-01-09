/*CMD
  command: 📤 Withdraw
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

var minwith = parseFloat(5) //Minimum Withdraw in Place of 10
let stat = Bot.getProperty("" + user.telegramid + "?Ban")
if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
} else {
  let balance = Libs.ResourcesLib.userRes("balance")
  var wallet = User.getProperty("wallet")
  if (!wallet) {
    Bot.sendMessage("*🗂 You Need To Setup Your wallet*")
  } else {
    if (balance.value() < minwith) {
      Bot.sendMessage(
        "*⚠ Must Own Atleast " + minwith + " TRX To Make Withdrawal*"
      )
    } else {
      Bot.sendMessage("*📤 Enter Amount of TRX to Make Withdrawal*")
      Bot.runCommand("/withdraw#2")
    }
  }
}
