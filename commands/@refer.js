/*CMD
  command: @refer
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

/*if ( user.telegramid == 1028030594 )
{
} else {
Bot.sendMessage(`*Bot Is In Under Development..

So try again later.....

Or Contact *[🅺︎ꪖ𝘳ꪖꪀ 🆂︎᭙ꪖꪑ𝓲](https://t.me/kswami9)`,{disable_web_page_preview: true}
)

return


}*/

var Reflist = Libs.ReferralLib.getRefCount()

if ( Reflist>1000) { Bot.sendKeyboard("🔃 Refresh","⛔ Look like you have been reached 100 Refer! We blocked you due using hack / script! please contact @abbykxyz / @dahixkxyz / @kanzokxyz for more info!")

return
}
