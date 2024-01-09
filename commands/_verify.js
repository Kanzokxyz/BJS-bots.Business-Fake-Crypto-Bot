/*CMD
  command: /verify
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

if(chat.chat_type!="private"){
var but=[[{title:"🔰 Use Me",url:"https://t.me/"+bot.name+"?start"}]]
Bot.sendInlineKeyboard(but,"🏁 To Use Me,\nPlease Message Me In Private [ Click On 🔰 Use Me ]",{is_reply:true})
return }

/*let verified = User.getProperty("verified")
if(verified==undefined||verified=="No"){*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
if(!params){ return }
//Don't Remove Else Bot Will Hack

var spl = params.split(" ")
let data = spl[0]
let ans = User.getProperty("iv")
if(ans==data){
Bot.sendMessage("✅ You Are Verified!")
User.setProperty("verified","Yes","text")
Bot.runCommand("/start1358")
}else{
Bot.sendMessage("⛔️ Verification Failed! ")
// Bot.sendMessage("❌ You Have Been Banned For Using Multiple Account")
// Bot.blockChat(chat.id) - enable if you want user that fail the captcha get blocked by bot
}

/*return }
Bot.sendMessage("✅ You Are Already Verified",{is_reply:true})*/

