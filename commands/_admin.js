/*CMD
  command: /admin
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}


var password = Bot.getProperty("panelpass")

if (user.telegramid == 6223418489) {
Bot.sendMessage("🔐Access Granted")
var buttons = [
    [{title: "📣 Broadcast", command: "/bcbutton" }],
    [{title: "🔒 Ban User ", command: "ban user" },{title: "🔓 Unban User", command: "unban user" }],
    [{title: "🌀 Change Balance", command: "Change Balance"}],[{title:"📤 Send Message to User", command:"MessageUser"}],
    [{title: "Add Admin", command: "/AddAdmin"},{title: "Remove Admin", command: "/RemoveAdmin"}],
    [{title:"📤 Send Bot", command:"CloneBot"}],
    [{title: "🔥 Change Bonus", command: "Change Bonus" },{title: "💰 Check User Balance ", command: "💰 Check User Balance" }],
    [{title: "📊 Fake Statistics", command: "fakingqa" }],
    [{title: "🏵 Change Start Channel ", command: "Start Channel" },{title: "🎯 Payment Channel", command: "Payment channel"}],
    [{title: "📤 Set Minimum Withdraw", command: "minimum withdraw" }],
    [{title: "🔐 Change Panel Password" , command:"/changepass"}],
    [{title: "🚧Log Out", command:"/mainmenu1358"}]
]

Bot.sendInlineKeyboard(buttons, "*Hey* " +user.first_name+ " \n*Welcome To the admin panel*" + "\n*💢Warning when using this panel please don't send any other command it may spoil your work*\n\n🌐 _Coded_ _by_ [Devendra](https://t.me/Royal_Devendra)", {disable_web_page_preview: true});

}else {
Bot.sendMessage("🚫Wrong Password\n💢Access Denied")
}
