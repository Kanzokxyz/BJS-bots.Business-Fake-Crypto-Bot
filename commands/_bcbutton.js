/*CMD
  command: /bcbutton
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

var buttons = [
    {title: "🚀 BROADCAST 1", command: "/bc1" },
    {title: "🚀 BROADCAST 2", command: "/bc2" }
];
Bot.sendInlineKeyboard(buttons, "🚀 Which Broadcast You Want?")
