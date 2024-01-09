/*CMD
  command: /tf#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ℹ️ Enter Amount

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var tgid = options.tgid
if(message > balance.value()) {
Bot.sendMessage("*⚠️ Insufficient Balance\n\n📛 You Have Only "+balance.value()+" TRX.*")
}else{
var friend = Libs.ResourcesLib.anotherUserRes("balance",tgid)
friend.add(+message) 
balance.add(-message) 
Bot.sendMessage("*✅ "+message+" TRX Has Been Transfer To "+tgid+".\n\n💵 Your Current Balance : "+balance.value()+" TRX*")
Bot.sendMessageToChatWithId(
      tgid,
      "*🎉 You Have Received *" +
        message +
        " *TRX From Anonymous*"
    )
}
