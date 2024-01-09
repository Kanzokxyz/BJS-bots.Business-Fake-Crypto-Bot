/*CMD
  command: 🎁 Bonus
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

function canRun() {
  var last_run_at = User.getProperty("last_run_at")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage("⛔_ You Already Recieved Bonus in Last 24 Hours_")
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at", Date.now(), "integer")
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(1)
Bot.sendMessage(
  "*🎁 Congrats , you Received 1 TRX*\n\n🔍 Check Back After 24 Hours!"
)
