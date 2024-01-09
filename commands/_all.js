/*CMD
  command: /all
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🎃 HOW MANY?

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 6223418489) {
    let amount = Bot.setProperty("amount", message, "string")
    Bot.sendMessage("🎁 Done!")
    Bot.getProperty("amount")
    Bot.runAll({
      command: "/addall"
    })
  } else {
    Bot.sendMessage("❌ You Are Not An Admin")
  }
