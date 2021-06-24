const parser = require('cron-parser')

console.log('---------- Testing every 30 minutes ----------')
try {
    const interval = parser.parseExpression('* */30 * * * *');

    console.log('Next Date: ', interval.next().toString()); // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)

    console.log('Prev Date: ', interval.prev().toString()); // Sat Dec 29 2012 00:40:00 GMT+0200 (EET)
} catch (err) {
    console.log('Error: ' + err.message);
}

console.log('---------- Testing every 0th minute ----------')
try {
    const interval = parser.parseExpression('* 0 * * * *');

    console.log('Next Date: ', interval.next().toString()); // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)

    console.log('Prev Date: ', interval.prev().toString()); // Sat Dec 29 2012 00:40:00 GMT+0200 (EET)
} catch (err) {
    console.log('Error: ' + err.message);
}
