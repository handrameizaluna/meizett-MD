const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Scritle-MD"
global.ownername= "Trafalgar D. Handra Joestar"
global.myweb ="https://api-handramz.herokuapp.com/"
global.youtube = "https://instagram.com/handrajoestar_" 
global.github = "https://github.com/whojoestar"
global.email = "scritlebothandramz@gmail.com"
global.region = "Indonesia"
global.ownernomer = "6283176474191" 
global.ownernomerr = "+6283176474191"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg"
global.owner = ["6283176474191"]
global.packname = '© Scritle'
global.author = 'Joestar'
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'done',
    admin: 'This command can only be used by admins!',
    botAdmin: 'This command can only be used when the bot becomes an admin!',
    owner: 'This command can only be used by the owner!',
    group: 'This command can only be used in groups!',
    private: 'This command can only be used in private!',
	bot: 'Bot Number User Special Features',
    errtoimg: 'Gomen, not yet support gif stickers',
    wait: 'Process, Wait a moment',
	lockCmd: 'Feature Not Enabled By Owner!',
	example1: 'Welcome @user in the group @subject Dont forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
