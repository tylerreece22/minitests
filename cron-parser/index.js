const parser = require('cron-parser')

console.log('---------- Testing every 30 minutes ----------')
try {
    const interval = parser.parseExpression('* */30 * * * *');

    console.log('Next Date: ', interval.next().toString());

    console.log('Prev Date: ', interval.prev().toString());
} catch (err) {
    console.log('Error: ' + err.message);
}

console.log('---------- Testing every 0th minute ----------')
try {
    const interval = parser.parseExpression('* 0 * * * *');

    console.log('Next Date: ', interval.next().toString());

    console.log('Prev Date: ', interval.prev().toString());
} catch (err) {
    console.log('Error: ' + err.message);
}

console.log('---------- Testing every 0th minute UTC ----------')
try {
    const interval = parser.parseExpression('* 0 * * * *', {tz: 'Etc/UTC', currentDate: new Date('Thu Jun 24 2021 09:20:21 GMT-0400')});

    console.log('Next Date: ', interval.next().toDate());

    console.log('Prev Date: ', interval.prev().toDate());
} catch (err) {
    console.log('Error: ' + err.message);
}
