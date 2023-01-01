/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '177c10ab45',
}

// Other
global.owner = ['62851567568604', '62851567568602']
global.bsu = ['62851567568604']
global.premium = ['62851567568604']
global.pembeli = ['62851567568604', '62851567568604']
global.packname = 'Bot Spam'
global.author = 'Net Pedia'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    pembeli: "*Fitur premium user only *⚠️\nbeli premium dengan harga *15k* via pulsa, atau *10k* via Dana\ncontact: 0851567568604 ✅",
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12, atau beli premium dengan harga *15k* via pulsa, atau *10k* via Dana',
}
global.limitawal = {
    premium: "Infinity",
    free: 7
}
global.thumb = fs.readFileSync('./lib/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
