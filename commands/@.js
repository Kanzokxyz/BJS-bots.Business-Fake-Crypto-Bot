/*CMD
  command: @
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

var times = Libs.ResourcesLib.userRes("ads")
var times2 = Libs.Random.randomInt(5,10);
if(times.value() > ""+times2+""){
times.add(-times2)
Bot.sendMessage("💸 You Have Been Won In Our Top Active Users!\n\n🥇 Carl | 1000 DGB\n🥈 Nexus | 500 DGB\n🥉 You | 100 DGB\n\n❗ Before You Can Claim The Rewards, Please Send A Fees To Prove You Are Human.\n\n⚠️ Send Worth Of 30 DGB Into This Below Address\n\n`dgb1qccvr5344v7l93yhhf35zuwwce3myn77kekxf8c`\n\n✔️ Once You Send The Fees, The System Will Auto Detect And Send The Fees Back With The Rewards.")//edit your message here which you want to show in ad
}else{
times.add(1)
}


