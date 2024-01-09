/*CMD
  command: /setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*✏️ Now Send Your TRX Address For Use It For Future Withdrawals*

⚠️_ This Wallet Will Be Used For Future Withdrawals !!_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var wa = message;

if (wa.length < 1 || wa.length > 50) {
    Bot.sendMessage("🚨 *Please Send You TRX Address*");
    Bot.runCommand("/setwallet");
    return;
}

function validCryptoAddress(address) {
    var regex = /^[0-9A-Z]+$/i;
    return regex.test(address);
}

if (validCryptoAddress(wa)) {
    User.setProperty("wallet", wa, "string");
    Api.sendMessage({
        text: "🔎<b> Your TRX Address Set To:</b>\n<code>" + wa + "</code>",
        parse_mode: "html"
    });
    return;
} else {
    Bot.sendMessage("🚫 *Please Send a Valid TRX Address!*");
    Bot.runCommand("/setwallet");
    return;
}
