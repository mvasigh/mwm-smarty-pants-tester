class DateParser {
  constructor() {
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
  }

  getMonthInt(monthStr) {
    return this.months.indexOf(monthStr) + 1;
  }

  getMonthStr(monthInt) {
    return this.months[monthInt - 1];
  }

  // Takes date as String in common 'MMM DD, YYYY' format (i.e. 'Jan 10, 2018') and returns object with month, day, year as integer values
  parseDate(formattedDate) {
    const [monthDayStr, yearStr] = formattedDate.split(', ');
    const [monthStr, dayStr] = monthDayStr.split(' ');
    return {
      month: this.getMonthInt(monthStr),
      day: parseInt(dayStr),
      year: parseInt(yearStr)
    };
  }

  // Takes in date object with month, day, year integer values and returns formatted date string
  formatDate(dateObj) {
    const { month, day, year } = dateObj;
    return `${this.getMonthStr(month)} ${day}, ${year}`;
  }

  // Takes an array of date strings and returns a sorted array of strings
  sortDates(arr) {
    const sortedDates = arr
      .map(date => this.parseDate(date))
      .sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day);
    return sortedDates.map(date => this.formatDate(date));
  }
}

module.exports = DateParser;
