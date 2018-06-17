const log = msg => console.log(msg);
const DateParser = require('./date_parser');
const dateParser = new DateParser();
const testData = [
  'Oct 7, 2009',
  'Jan 10, 2009',
  'Jan 31, 1923',
  'Oct 22, 2009',
  'Feb 2, 1991',
  'Mar 20, 1991',
  'Nov 10, 2009',
  'Jan 3, 2013',
  'Jun 16, 2018',
  'Jun 25, 1994',
  'Dec 29, 1990'
];
const sortedDates = [
  'Jun 16, 2018',
  'Jan 3, 2013',
  'Nov 10, 2009',
  'Oct 22, 2009',
  'Oct 7, 2009',
  'Jan 10, 2009',
  'Jun 25, 1994',
  'Mar 20, 1991',
  'Feb 2, 1991',
  'Dec 29, 1990',
  'Jan 31, 1923'
];

const test = (fn, input, expected) => {
  fn = fn.bind(dateParser);
  const result = fn(input);
  log(fn);
  log(`Input: ${input}`);
  log(`Expected: ${expected}`);
  log(`Got: ${result}`);
  JSON.stringify(expected) === JSON.stringify(result) ? log('Passed') : log('Failed');
};

function testDateParser() {
  // getMonthInt
  test(dateParser.getMonthInt, 'Mar', 3);
  test(dateParser.getMonthInt, 'Jun', 6);
  test(dateParser.getMonthInt, 'Oct', 10);

  // getMonthStr
  test(dateParser.getMonthStr, 5, 'May');
  test(dateParser.getMonthStr, 12, 'Dec');
  test(dateParser.getMonthStr, 11, 'Nov');

  // sortDates
  test(dateParser.sortDates, testData, sortedDates);
}

testDateParser();
