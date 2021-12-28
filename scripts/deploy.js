const exec = require('child_process').exec
const execSync = require('child_process').execSync

const deployHost = '192.168.3.99' // 5f-ecs
const deployUser = 'ssh' // 密碼 bxb9703838
const deployLocation = `${deployUser}@${deployHost}:C:/BXB/ECSv2/public`

exec(`scp -r dist/* ${deployLocation}`, (err, stdout, stderr) => {
  if (err) console.log(err)
  console.log('\x1b[32m%s\x1b[0m', `Copied dist/* to ${deployHost} successfully`)

  exec(`ssh ${deployUser}@${deployHost} pm2 restart web`, (err, stdout, stderr) => {
    if (err) console.log(err)
    console.log('\x1b[32m%s\x1b[0m', 'pm2 restart web successfully')
  })
})

