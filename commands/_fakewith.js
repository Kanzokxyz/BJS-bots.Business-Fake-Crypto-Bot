/*CMD
  command: /fakewith
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

var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global")
var characters = "1234567890abcdefghijklmnopqrstuvwxyz"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("b",generateString(61), "string")
let b = Bot.getProperty("b")
var bs = Bot.getProperty("b") // fake hash
var characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("fakewallet",generateString(34), "string")
let fakew = Bot.getProperty("fakewallet")
var fakeadr = Bot.getProperty("fakewallet") // fake wallet
var characters = "56789"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("fakeid",generateString(10), "string")
let fakei = Bot.getProperty("fakeid")
var fakeid = Bot.getProperty("fakeid") // fake hash
var characters = "123456789"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("fakeamo",generateString(1), "string")
let fakea = Bot.getProperty("fakeamo")
var fakeamo = Bot.getProperty("fakeamo") // fake hash
var channel = "@BikersPayout" //<------- your channel username with "@"
      Api.sendMessage({
        chat_id: channel,
        text:
          "<b>🚀 New Payment Successfully Paid 🚀\n\n🆔 ID : "+ fakeid +"\n✅ Addess : </b><code>T"+ fakeadr +"</code>\n💸<b> Amount : "+ fakeamo +" TRX\n🖇 HASH - "+bs+"\n\n⛽ BOT LINK -\n@"+ bot.name +"</b>",
        parse_mode: "html",
        disable_web_page_preview: true
      })
      
      Api.sendMessage({
    chat_id: 6223418489, //admin telegram id here
    text:
      "🎉 FAKE WITHDRAW LAUNCH @BikersPayout",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  
  payouts.add(parseFloat(fakeamo))
