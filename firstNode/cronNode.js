var CronJob = require('cron').CronJob;
new CronJob('0 22 * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/New_York');