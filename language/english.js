//saya hanya menggunakan google translate, so if there is an error please correct it 

exports.noAbsen = () =>{
return `❌ No absences take place in this group!`
}
exports.StartAbsen = () =>{
	return`Start Absence`
	}
exports.DahAbsen = () =>{
	return`You're absent`
	}
exports.DelAbsen = () =>{
	return`✅ Successfully deleted absences in this group`
	}
exports.adaAbsen = () =>{
	return`There are still absent sessions in this group!`
	}
exports.SAbsen = () =>{
	return`Absence begins`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply sticker!\nExample : ${prefix + command} menu\n\n\n*Note: Cannot be accompanied by Prefix!*`
	}
exports.CmdApa = () =>{
	return`For What Command?`
	}
exports.UCmd = () =>{
	return`You don't have permission to modify this sticker order`
	}
exports.HashCmd = () =>{
	return`No hashes`
	}
exports.DelCmd = () =>{
	return`✅ The cmd sticker has been removed`
	}
exports.LockCmd = () =>{
	return`Reply message`
	}
exports.NoCmd = () =>{
	return`Hash not found in database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message You Want To Save In Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Example : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' has been registered in the message list`
}
exports.DoneMsg = (prefix, text) => {
    return `Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' not listed in the message list`
}
exports.DelMsg = (text) => {
    return `Delete successfully '${text}' from the message list`
}

exports.OnBef = () => {
    return `It's been activated before`
}
exports.OffYaBef = () => {
    return `It's been deactivated before`
}
exports.OkOn = (command) => {
    return `${command} Successfully Activated !`
}
exports.OffBef = (command) => {
    return `${command} Successfully Deactivated !`
}
exports.OkMute = () => {
    return `Bot has been muted in this group`
}
exports.OkUnMute = () => {
    return `Bot Succeeded In UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Successfully Unban chat`
}
exports.NoMute = () => {
    return `Bot has not been banned in this group`
}

exports.NoMsgBot = () => {
    return `The message was not sent by a bot!`
}
exports.ToimgErr = () => {
    return `Sorry Currently Not Support Gif Sticker`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker With Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Success Change To Public Mode`
}
exports.BotSelf = () => {
    return `Successfully Change To Self Mode\n\nTo change to public mode, please use the bot number`
}
exports.NoToStik = (prefix, command) => {
    return `Send/Reply Image/Video With Caption ${prefix + command}\n\nVideo Sticker Duration 1-9 Seconds`
}
exports.NoPpBot = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `The message you replied to does not contain a reply`
}
exports.SetGcName = (prefix, command) => {
    return `Send orders ${prefix + command} *text*`
}
exports.SetPpGc = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Enter the group link!`
}
exports.MauKick = () => {
    return `Send the target number/tag/reply you want to kick!`
}
exports.MauAdd = () => {
    return `Send the target number/tag/reply you want to add!`
}
exports.NakPm= () => {
    return `Send the target number/tag/reply you want to promote!`
}
exports.NakDm = () => {
    return `Send the target number/tag/reply you want to demote!`
}
exports.Family = () => {
    return `There Are Still Unfinished Sessions!`
}
exports.NoWm = (prefix, command) => {
    return `Send orders ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Send orders ${prefix + command} *teks*\n\nExp : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Send orders ${prefix + command} *teks 1|teks 2*\n\nExp : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `The nsfw feature has not been activated`
}
exports.CoverBanLol = (prefix, command) => {
    return `Exp : ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered are Wrong*\n\n_Here's the list of true heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Exp : ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*The style you entered is wrong*\n\n_Here's a list of the correct styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Exp : ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The color you entered is wrong*\n\n_Here's a list of the correct colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Ex: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Ex: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What you entered is wrong*\n\n_Here's a List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Exp : ${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Exp : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Exp : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Wrong answer`
}

exports.JwbTrue = (tebak) => {
return`🎮 ${tebak} 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`
}
exports.TbGam = () => {
    return `Guess the picture`
}
exports.TbKa = () => {
    return `Guess the word`
}
exports.TbBe = () => {
    return `Guess the Flag`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Arrange Words`
}
exports.TbAt = () => {
    return `Guess the Sentence`
}
exports.TbSi = () => {
    return `Guess who`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Guess the District`
}
exports.TbKi = () => {
    return `Guess Chemistry`
}
exports.TbLi = () => {
    return `Guess the Lyrics`
}
exports.TbKan = () => {
    return `Riddles`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer the following questions :*\n${soal}\n\nThere is *${jawaban}* Answer ${find(v => v.includes(' ')) ? '(Some Answers Have Spaces)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Has Afk With Reason ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Please answer the questions above\n\nDescription : ${desk}\nTime : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Time has run out\nAnswer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Time has run out\nAnswer:  ${jawaban}}\nDescription : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Please Answer The Following Questions\n\n${soal}\nTime : ${time}`
}
exports.TbBendera = (time) => {
    return `Please Answer The Question Above\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `The picture above is a picture of the district?\nTime : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `What does the symbol mean? : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `These are the lyrics of the song? : *${soal}*?\nTime : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Answer the following questions :*\nQuestion : ${soal}\nType : ${tipe}\nTime : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nUsage examples: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*What is the result of: ${soal}*?\n\nTime: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Send/Reply Photo/Sticker With Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Send orders ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Enter username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply gif sticker with caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Send/Reply Media With Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Send Broadcast To ${anu} ${chat}\nTime's up ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker with caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Send/reply ${video} with caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send orders ${prefix + command} *language code* *teks*
	• Exp : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	• Exp : ${prefix + command} id hi
List of supported languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key cannot be the same as feature/command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List of responses with key : *${arg}* already in this group.`
}
exports.AddlistDone = (arg) => {
    return `Successfully set list message with key : *${arg}*`
}
exports.Dellist = () => {
    return `There is no message list in the database`
}
exports.Dellist_  = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List response with key *${key}* not in database!`
}
exports.DellistDone = (key) => {
    return `Successfully delete list message with key *${key}*`
}
exports.ListUp = (key) => {
    return `Sorry, the key *${key}* is not yet registered in this group`
}
exports.UpList = (key) => {
    return `Successfully update list message with key : *${args1}*`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hi ${pushname} Welcome to Anonymous Chat\n\nType ${prefix}start to find your Chat Friend, or you can press the Search button below`
}
exports.Anon = () => {
    return `Find Friends Chat`
}
exports.StopAnon = () => {
    return `You are not in an anonymous session, press the button to find a partner `
}
exports.AnonNew = () => {
    return `Find New Friends`
}
exports.AnonDahStop = () => {
    return `✅ Successfully stopped chat`
}
exports.StopAnonByFren = () => {
    return `⚠️ This chat session has been terminated by your chat friend`
}
exports.AnonOn = () => {
    return `️ You are still in a chat session with a partner!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found 🐼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `🔎 Please wait looking for chat friends`
}
exports.NoAnon = () => {
    return `⚠️ You've never started a chat!`
}

exports.AllFitur = () => {
    return `\nAll bot features`
}
exports.InfoMenu = () => {
    return `\n_Looking for the latest information via bot_`
}
exports.KhususOwn = () => {
    return `\n_Owner Bots Special Features_`
}
exports.DataBor = () => {
    return `\n_Storing something in the bot database_`
}
exports.MenuGc = () => {
    return `\n_Show group specific features_`
}
exports.MenuAni = () => {
    return `\n_Looking for random anime pictures_`
}
exports.TagMem = () => {
    return `\n_Tag group member_`
}
exports.StalkOrk = () => {
    return `\n_People's social media stalking_`
}
exports.Hoja = () => {
    return `\n_Looking for something unimportant_`
}
exports.CovertWi = () => {
    return `\n_Convert something with bot_`
}
exports.AnuFoto = () => {
    return `\n_Change the picture to be more interesting_`
}
exports.HajuStik = () => {
    return `\n_Create unique stickers_`
}
exports.EloDown= () => {
    return `\n_Show download feature_`
}
exports.StikerWibu = () => {
    return `\n_Random anime stickers_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_To create a logo using a bot_`
}
exports.oterMenu = () => {
    return `\n_More menu_`
}
exports.GameBot = () => {
    return `\n_Features for playing with bots_`
}
exports.RandRik = () => {
    return `\n_Random tiktok videos_`
}
exports.RandCew = () => {
    return `\n_Random pictures of beautiful girls_`
}
exports.RamalOi = () => {
    return `\n_Today's forecast_`
}
exports.TeleStik= () => {
    return `\n_Random sticker from telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Create cool logos with bots_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Make an attractive logo_`
}
exports.TobatBro = () => {
    return `\n_Islamic features_`
}
exports.MauJualan = () => {
    return `\n_Features for selling_`
}
exports.GadaChat = () => {
    return `\n_Features for random chat_`
}
exports.SumberBot = () => {
    return `\n_Source of this bot script_`
}
exports.Tqnya = () => {
    return `\n_Who contributed to this bot_`
}
exports.SetAh = () => {
    return `Do you want a set menu?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Detected*\n\nYou will be removed from the group ${gc}`
    }
    exports.GjdKick = () => {
    return `Looks like you sent this group link, you won't be kicked out`
    }
/////////

/////////
exports.private = () =>{
	return`The feature can only be used in private chat`
	}
exports.wait = () => {
    return `⏳ Please wait a moment`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Error Moderate Features`
}
exports.erorLink = () => {
    return `⚠️ The link is error`
}
exports.media = () => {
    return `Please select the media you want to download`
}
exports.replyImg = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ This command is for the owner`
}

exports.doneOwner = () => {
    return `✅  ️It's done, Owner ~`
}

exports.groupOnly = () => {
    return `👥  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `🙅  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User is not an admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make bot as admin first! `
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank you for reporting, we will receive your report soon.`
}

exports.videoLimit = () => {
    return `File size is too big!`
}

exports.notNum = (q) => {
    return `"${q}", not numbers!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hi bro ${pushname} 👋 good ${salam} , 
i'm ${botname}, this bot is Whatsapp Multi-Device Beta.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Good ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu Joestar-Md :*

「 Bot Info 」 
𐁘 ${prefix}owner
𐁘 ${prefix}rules
𐁘 ${prefix}sc
𐁘 ${prefix}ping
𐁘 ${prefix}runtime
𐁘 ${prefix}botstatus
𐁘 ${prefix}donate


「 Owner 」 
𐁘 ${prefix}setmenu [query]
𐁘 ${prefix}setmenu templateLocation
𐁘 ${prefix}setmenu templateTenor
𐁘 ${prefix}setmenu katalog
𐁘 ${prefix}setmenu katalog2
𐁘 ${prefix}setmenu list
𐁘 ${prefix}setwm packname|author
𐁘 ${prefix}sendsesi
𐁘 ${prefix}listpc
𐁘 ${prefix}listgc
𐁘 ${prefix}broadcast [text]
𐁘 ${prefix}bc [text]
𐁘 ${prefix}bcgc [text]
𐁘 ${prefix}nsfw [on/off]
𐁘 ${prefix}mute [on/off]
𐁘 ${prefix}banchat
𐁘 ${prefix}unbanchat
𐁘 ${prefix}autorespond [on/off]
𐁘 ${prefix}antiviewonce [on/off]
𐁘 ${prefix}autobio [on/off]
𐁘 ${prefix}join [link]
𐁘 ${prefix}self
𐁘 ${prefix}public [only bot]
𐁘 ${prefix}del [reply pesan bot]
𐁘 ${prefix}setppbot [reply image]

「 Store Menu 」
𐁘 ${prefix}list
𐁘 ${prefix}addlist [key|respond]
𐁘 ${prefix}dellist [key]
𐁘 ${prefix}update [key|respond]
𐁘 ${prefix}store
𐁘 ${prefix}kali
𐁘 ${prefix}bagi
𐁘 ${prefix}tambah
𐁘 ${prefix}kurang
𐁘 ${prefix}kalkulator
𐁘 ${prefix}proses
𐁘 ${prefix}done [surah|ayat]

「 Anonymous 」
𐁘 ${prefix}anonymous 
𐁘 ${prefix}start
𐁘 ${prefix}skip [daerah]
𐁘 ${prefix}stop [surah|ayat]


「 Database 」 
𐁘 ${prefix}setcmd [reply stiker]
𐁘 ${prefix}delcmd [reply stiker]
𐁘 ${prefix}listcmd
𐁘 ${prefix}absen
𐁘 ${prefix}cekabsen
𐁘 ${prefix}deleteabsen
𐁘 ${prefix}absenstart
𐁘 ${prefix}addmsg [nama file]
𐁘 ${prefix}getmsg [nama file]
𐁘 ${prefix}listmsg
𐁘 ${prefix}delmsg [nama file]


「 Group 」 
𐁘 ${prefix}listonline
𐁘 ${prefix}sider
𐁘 ${prefix}wm packname|author
𐁘 ${prefix}infochat
𐁘 ${prefix}setdesk [text]
𐁘 ${prefix}setppgrup [reply image]
𐁘 ${prefix}antilink [on/off]
𐁘 ${prefix}revoke
𐁘 ${prefix}leave
𐁘 ${prefix}add [62***]
𐁘 ${prefix}kick @tag
𐁘 ${prefix}leave
𐁘 ${prefix}linkgc
𐁘 ${prefix}take packname|author
𐁘 ${prefix}group [open/close]
𐁘 ${prefix}tagall [text]
𐁘 ${prefix}hidetag [text]

「 Anime 」 
𐁘 ${prefix}quotesanime
𐁘 ${prefix}anime [query]
𐁘 ${prefix}manga [query]
𐁘 ${prefix}character [query]

「 Tag 」 
𐁘 ${prefix}stickertag
𐁘 ${prefix}videotag [query]
𐁘 ${prefix}vntag [query]
𐁘 ${prefix}imagetag [query]

「 Stalking 」 
𐁘 ${prefix}igstalk [username]
𐁘 ${prefix}ghstalk [username]
𐁘 ${prefix}ytstalk [channel]


「 Search 」 
𐁘 ${prefix}ytsearch [query]
𐁘 ${prefix}wallpaper [query]
𐁘 ${prefix}google [query]
𐁘 ${prefix}wikimedia [query]
𐁘 ${prefix}hentai
𐁘 ${prefix}wattpad [query]
𐁘 ${prefix}webtoons [query]
𐁘 ${prefix}drakor [query]
𐁘 ${prefix}pinterest [query]


「 Converter 」
𐁘 ${prefix}toaudio [video]
𐁘 ${prefix}tomp3 [video]
𐁘 ${prefix}tovn [video]
𐁘 ${prefix}stiker [reply image]
𐁘 ${prefix}tourl [image/video/stiker]
𐁘 ${prefix}togif [sticker]
𐁘 ${prefix}tomp4 [sticker]
${prefix}toimg [reply sticker]

「 Download 」 
𐁘 ${prefix}tiktok [link]
𐁘 ${prefix}tiktoknowm [link]
𐁘 ${prefix}tiktokwm [link]
𐁘 ${prefix}tiktokaudio [link]
𐁘 ${prefix}ytdl [link]
𐁘 ${prefix}play [query]
𐁘 ${prefix}ytmp3 [link]
𐁘 ${prefix}ytshortmp3 [link]
𐁘 ${prefix}ytmp4 [link]
𐁘 ${prefix}ytshorts [link]
𐁘 ${prefix}facebook [link]
𐁘 ${prefix}facebooksd [link]
𐁘 ${prefix}facebookhd [link]
𐁘 ${prefix}fbaudio [link]
𐁘 ${prefix}igstory [username]
𐁘 ${prefix}igdl [link]
𐁘 ${prefix}igphoto [link]
𐁘 ${prefix}igvideo [link]
𐁘 ${prefix}igreels [link]
𐁘 ${prefix}igtv [link]
𐁘 ${prefix}soundcloud [link]
𐁘 ${prefix}gitclone [link repo]
𐁘 ${prefix}gitrepo [username repo branch]
𐁘 ${prefix}mediafire [link]
𐁘 ${prefix}twitter link

「 Random Anime 」
𐁘 ${prefix}loli
𐁘 ${prefix}neko
𐁘 ${prefix}waifu
𐁘 ${prefix}shinobu
𐁘 ${prefix}megumin
𐁘 ${prefix}bully
𐁘 ${prefix}cuddle
𐁘 ${prefix}cry
𐁘 ${prefix}hug
𐁘 ${prefix}awoo
𐁘 ${prefix}kiss
𐁘 ${prefix}lick
𐁘 ${prefix}pat
𐁘 ${prefix}smug
𐁘 ${prefix}bonk
𐁘 ${prefix}yeet
𐁘 ${prefix}blush
𐁘 ${prefix}smile
𐁘 ${prefix}wave
𐁘 ${prefix}highfive
𐁘 ${prefix}handhold
𐁘 ${prefix}nom
𐁘 ${prefix}bite
𐁘 ${prefix}glomp
𐁘 ${prefix}slap
𐁘 ${prefix}kill
𐁘 ${prefix}happy
𐁘 ${prefix}wink
𐁘 ${prefix}poke
𐁘 ${prefix}dance
𐁘 ${prefix}cringe

「 Others 」
𐁘 ${prefix}afk [reason]
𐁘 ${prefix}translate kode_bahasa text
𐁘 ${prefix}kalkulator [query]
𐁘 ${prefix}smeme [text]
𐁘 ${prefix}smeme2 [text|text]
𐁘 ${prefix}memegen [text|text]

「 Game Menu 」
𐁘 ${prefix}kuismath
𐁘 ${prefix}tebak [option]
𐁘 ${prefix}tekateki
𐁘 ${prefix}susunkata
𐁘 ${prefix}caklontong

「 Telegram Sticker 」
𐁘 ${prefix}awoawo
𐁘 ${prefix}benedict
𐁘 ${prefix}chat
𐁘 ${prefix}dbfly
𐁘 ${prefix}dino_kuning
𐁘 ${prefix}doge
𐁘 ${prefix}gojosatoru
𐁘 ${prefix}hope_boy
𐁘 ${prefix}jisoo
𐁘 ${prefix}kr_robot
𐁘 ${prefix}kucing
𐁘 ${prefix}manusia_lidi
𐁘 ${prefix}menjamet
𐁘 ${prefix}meow
𐁘 ${prefix}nicholas
𐁘 ${prefix}patrick
𐁘 ${prefix}popoci
𐁘 ${prefix}sponsbob
𐁘 ${prefix}kawan_sponsbob
𐁘 ${prefix}tyni
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

No Rules.
`
}
exports.welcome = () =>{
	return`Don't forget the introduction sis 🤗
	
╭ Name :
𐁘 Age :
𐁘 Gender :
𐁘 From country :
𐁘  Please obey the group rules, sis ~`
}
exports.leave = () =>{
	return`Well why out 😣 Mentally safe, right? >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://handrameizaluna.github.io
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 GITHUB 」 -------*

github.com/handrameizaluna
github.com/handrajoestar

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`「 Bot Info 」 
𐁘 ${prefix}owner
𐁘 ${prefix}rules
𐁘 ${prefix}sc
𐁘 ${prefix}ping
𐁘 ${prefix}runtime
𐁘 ${prefix}botstatus
𐁘 ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`「 Owner 」 
𐁘 ${prefix}setmenu [query]
𐁘 ${prefix}setmenu templateLocation
𐁘 ${prefix}setmenu templateTenor
𐁘 ${prefix}setmenu katalog
𐁘 ${prefix}setmenu katalog2
𐁘 ${prefix}setmenu list
𐁘 ${prefix}setwm packname|author
𐁘 ${prefix}sendsesi
𐁘 ${prefix}listpc
𐁘 ${prefix}listgc
𐁘 ${prefix}broadcast [text]
𐁘 ${prefix}bc [text]
𐁘 ${prefix}bcgc [text]
𐁘 ${prefix}nsfw [on/off]
𐁘 ${prefix}mute [on/off]
𐁘 ${prefix}banchat
𐁘 ${prefix}unbanchat
𐁘 ${prefix}autorespond [on/off]
𐁘 ${prefix}antiviewonce [on/off]
𐁘 ${prefix}autobio [on/off]
𐁘 ${prefix}join [link]
𐁘 ${prefix}self
𐁘 ${prefix}public [only bot]
𐁘 ${prefix}del [pesan bot]
𐁘 ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`「 Database 」 
𐁘 ${prefix}setcmd [reply stiker]
𐁘 ${prefix}delcmd [reply stiker]
𐁘 ${prefix}listcmd
𐁘 ${prefix}absen
𐁘 ${prefix}cekabsen
𐁘 ${prefix}deleteabsen
𐁘 ${prefix}absenstart
𐁘 ${prefix}addmsg [nama file]
𐁘 ${prefix}getmsg [nama file]
𐁘 ${prefix}listmsg
𐁘 ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`「 Group 」 
𐁘 ${prefix}listonline
𐁘 ${prefix}sider
𐁘 ${prefix}wm packname|author
𐁘 ${prefix}infochat
𐁘 ${prefix}setdesk [text]
𐁘 ${prefix}setppgrup [reply image]
𐁘 ${prefix}antilink [on/off]
𐁘 ${prefix}revoke
𐁘 ${prefix}leave
𐁘 ${prefix}add [62***]
𐁘 ${prefix}kick @tag
𐁘 ${prefix}leave
𐁘 ${prefix}linkgc
𐁘 ${prefix}take packname|author
𐁘 ${prefix}group [open/close]
𐁘 ${prefix}tagall [text]
𐁘 ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`「 Anime 」 
𐁘 ${prefix}quotesanime
𐁘 ${prefix}anime [query]
𐁘 ${prefix}manga [query]
𐁘 ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`「 Tag 」 
𐁘 ${prefix}stickertag
𐁘 ${prefix}videotag [query]
𐁘 ${prefix}vntag [query]
𐁘 ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`「 Stalking 」 
𐁘 ${prefix}igstalk [username]
𐁘 ${prefix}ghstalk [username]
𐁘 ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`「 Search 」 
𐁘 ${prefix}ytsearch [query]
𐁘 ${prefix}wallpaper [query]
𐁘 ${prefix}google [query]
𐁘 ${prefix}wikimedia [query]
𐁘 ${prefix}wattpad [query]
𐁘 ${prefix}webtoons [query]
𐁘 ${prefix}drakor [query]
𐁘 ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`「 Converter 」 
𐁘 ${prefix}toaudio [video]
𐁘 ${prefix}tomp3 [video]
𐁘 ${prefix}tovn [video]
𐁘 ${prefix}stiker [reply image]
𐁘 ${prefix}tourl [image/video]
𐁘 ${prefix}togif [sticker]
𐁘 ${prefix}tomp4 [sticker]
${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`「 Image Effect 」 
${prefix} no Image Effect menu.
`}

//
exports.effect2 = (prefix) =>{
	return`「 Sticker Effect 」 
${prefix} no Sticker Effetct menu.
`
}

exports.download = (prefix) =>{
return`「 Download 」 
𐁘 ${prefix}tiktok [link]
𐁘 ${prefix}tiktoknowm [link]
𐁘 ${prefix}tiktokwm [link]
𐁘 ${prefix}tiktokaudio [link]
𐁘 ${prefix}ytdl [link]
𐁘 ${prefix}play [query]
𐁘 ${prefix}ytmp3 [link]
𐁘 ${prefix}ytshortmp3 [link]
𐁘 ${prefix}ytmp4 [link]
𐁘 ${prefix}ytshorts [link]
𐁘 ${prefix}facebook [link]
𐁘 ${prefix}facebooksd [link]
𐁘 ${prefix}facebookhd [link]
𐁘 ${prefix}fbaudio [link]
𐁘 ${prefix}igstory [username]
𐁘 ${prefix}igdl [link]
𐁘 ${prefix}igphoto [link]
𐁘 ${prefix}igvideo [link]
𐁘 ${prefix}igreels [link]
𐁘 ${prefix}igtv [link]
𐁘 ${prefix}soundcloud [link]
𐁘 ${prefix}gitclone [link repo]
𐁘 ${prefix}gitrepo [username repo branch]
𐁘 ${prefix}mediafire [link]
𐁘 ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`「 Random Anime 」
𐁘 ${prefix}loli
𐁘 ${prefix}neko
𐁘 ${prefix}waifu
𐁘 ${prefix}shinobu
𐁘 ${prefix}megumin
𐁘 ${prefix}bully
𐁘 ${prefix}cuddle
𐁘 ${prefix}cry
𐁘 ${prefix}hug
𐁘 ${prefix}awoo
𐁘 ${prefix}kiss
𐁘 ${prefix}lick
𐁘 ${prefix}pat
𐁘 ${prefix}smug
𐁘 ${prefix}bonk
𐁘 ${prefix}yeet
𐁘 ${prefix}blush
𐁘 ${prefix}smile
𐁘 ${prefix}wave
𐁘 ${prefix}highfive
𐁘 ${prefix}handhold
𐁘 ${prefix}nom
𐁘 ${prefix}bite
𐁘 ${prefix}glomp
𐁘 ${prefix}slap
𐁘 ${prefix}kill
𐁘 ${prefix}happy
𐁘 ${prefix}wink
𐁘 ${prefix}poke
𐁘 ${prefix}dance
𐁘 ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`「 Nsfw & Sfw 」
${prefix} no Nsfw & Sfw menu.
`
}

exports.textpro = (prefix) =>{
	return`「 Textpro Menu 」
${prefix} no Textpro menu.
`
}


exports.other = (prefix) =>{
return`「 Others 」
𐁘 ${prefix}ttp [text]
𐁘 ${prefix}attp [text]
𐁘 ${prefix}afk [reason]
𐁘 ${prefix}translate kode_bahasa text
𐁘 ${prefix}kalkulator [query]
𐁘 ${prefix}smeme [text]
𐁘 ${prefix}smeme2 [text|text]
𐁘 ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`「 Game Menu 」
𐁘 ${prefix}kuismath
𐁘 ${prefix}tebak [option]
𐁘 ${prefix}tekateki
𐁘 ${prefix}susunkata
𐁘 ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`「 Asupan Menu 」
${prefix} no Asupan menu.
`
}
exports.cecan = (prefix) =>{
return`「 Random Cewe 」
${prefix} no Random Cewe menu.
`
}

exports.tqto = () =>{
	return`「 TqTo 」 
no thanks to anyone.
`
}

exports.primbonmenu = (prefix) =>{
	return`「 Primbon 」
𐁘 ${prefix}nomorhoki 887435047326
𐁘 ${prefix}artimimpi [query]
𐁘 ${prefix}artinama [query]
𐁘 ${prefix}ramaljodoh
𐁘 ${prefix}ramaljodohbali
𐁘 ${prefix}suamiistri
𐁘 ${prefix}ramalcinta
𐁘 ${prefix}cocoknama
𐁘 ${prefix}pasangan
𐁘 ${prefix}jadiannikah
𐁘 ${prefix}sifatusaha
𐁘 ${prefix}rezeki
𐁘 ${prefix}pekerjaan
𐁘 ${prefix}nasib
𐁘 ${prefix}penyakit
𐁘 ${prefix}tarot
𐁘 ${prefix}fengshui
𐁘 ${prefix}haribaik
𐁘 ${prefix}harisangar
𐁘 ${prefix}harisial
𐁘 ${prefix}nagahari
𐁘 ${prefix}arahrezeki
𐁘 ${prefix}peruntungan
𐁘 ${prefix}weton
𐁘 ${prefix}karakter
𐁘 ${prefix}keberuntungan
𐁘 ${prefix}memancing
𐁘 ${prefix}masasubur
𐁘 ${prefix}zodiak 
𐁘 ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`「 Telegram Sticker 」
𐁘 ${prefix}awoawo
𐁘 ${prefix}benedict
𐁘 ${prefix}chat
𐁘 ${prefix}dbfly
𐁘 ${prefix}dino_kuning
𐁘 ${prefix}doge
𐁘 ${prefix}gojosatoru
𐁘 ${prefix}hope_boy
𐁘 ${prefix}jisoo
𐁘 ${prefix}kr_robot
𐁘 ${prefix}kucing
𐁘 ${prefix}manusia_lidi
𐁘 ${prefix}menjamet
𐁘 ${prefix}meow
𐁘 ${prefix}nicholas
𐁘 ${prefix}patrick
𐁘 ${prefix}popoci
𐁘 ${prefix}sponsbob
𐁘 ${prefix}kawan_sponsbob
𐁘 ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`「 Ephoto360 Menu 」
${prefix} no Ephoto360 menu.
`
}

exports.logomenu = (prefix) =>{
	return`「 Logo Menu 」
${prefix} no Logo menu.
`
}

exports.islammenu = (prefix) =>{
	return`「 Islamic Menu 」
𐁘 ${prefix}asmaulhusna
𐁘 ${prefix}kisahnabi [nabi]
𐁘 ${prefix}jadwalshalat [daerah]
𐁘 ${prefix}randomquran
𐁘 ${prefix}randomquran2
𐁘 ${prefix}listsurah
𐁘 ${prefix}tafsirsurah [surah]
𐁘 ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`「 Anonymous 」
𐁘 ${prefix}anonymous 
𐁘 ${prefix}start
𐁘 ${prefix}skip [daerah]
𐁘 ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`「 Store Menu 」
${prefix} no store menu.
`
}


exports.soundmenu = (prefix) =>{
return`「 Sound Menu 」
${prefix} no sound menu.
`
}
