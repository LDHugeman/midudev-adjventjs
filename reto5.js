const date1 = new Date('Dec 1, 2021');
daysToXmas(date1); // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
daysToXmas(date2); // 1
const date3 = new Date('Dec 24, 2021 23:59:59');
daysToXmas(date3); // 1
const date4 = new Date('December 20, 2021 03:24:00');
daysToXmas(date4); // 5

const date5 = new Date('Dec 25, 2021');
daysToXmas(date5); // 0
const date6 = new Date('Dec 26, 2021');
daysToXmas(date6); // -1
const date7 = new Date('Dec 31, 2021');
daysToXmas(date7); // -6
const date8 = new Date('Jan 1, 2022 00:00:01');
daysToXmas(date8); // -7
const date9 = new Date('Jan 1, 2022 23:59:59');
daysToXmas(date9); // -7

/**
 *
 * @param {Date} date
 * @returns
 */
export default function daysToXmas(date) {
  const MILISECONDS_DAY = 24 * 60 * 60 * 1000;
  const XMAS_DAY = new Date('Dec 25, 2021');
  let differenceInMs = XMAS_DAY.getTime() - date.getTime();
  let diffenceInDays = differenceInMs / MILISECONDS_DAY;
  return Math.ceil(diffenceInDays);
}

console.log(daysToXmas(date5));
