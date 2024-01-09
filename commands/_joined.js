/*CMD
  command: /joined
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

let stat = Bot.getProperty(""+user.telegramid+"?Ban");

if (stat=="ban"){
  Bot.sendMessage("*You're Banned From Using The Bot ❌*");
}else{
  let channel = "@TechXAirdrops";
  let channel2 = "@AirdropsUniques";
  let channel3 = "@BikersPayout";
  let id = user.telegramid
  Api.getChatMember({
    chat_id : channel,
    chat_id1 : channel2,
    chat_id2 : channel3,
    user_id : id,
    on_result :"check"
  })
}
