/*CMD
  command: /tfa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ℹ️ Enter User ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.run({
command: "/tf#2",
options: { tgid : message }
})
