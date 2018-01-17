const test = require("ava");
const moment = require("moment");
const dayCount = require(".");

const Day = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};

test("day", t => {
  t.is(dayCount(moment("2018-01-14").toDate()).day, Day.Sunday);
  t.is(dayCount(moment("2018-01-15").toDate()).day, Day.Monday);
  t.is(dayCount(moment("2018-01-16").toDate()).day, Day.Tuesday);
  t.is(dayCount(moment("2018-01-17").toDate()).day, Day.Wednesday);
  t.is(dayCount(moment("2018-01-18").toDate()).day, Day.Thursday);
  t.is(dayCount(moment("2018-01-19").toDate()).day, Day.Friday);
  t.is(dayCount(moment("2018-01-20").toDate()).day, Day.Saturday);
});

test("count", t => {
  t.is(dayCount(moment("2018-01-07").toDate()).count, 1);
  t.is(dayCount(moment("2018-01-14").toDate()).count, 2);
  t.is(dayCount(moment("2018-01-21").toDate()).count, 3);
  t.is(dayCount(moment("2018-01-28").toDate()).count, 4);
  t.is(dayCount(moment("2018-01-38").toDate()).count, NaN);
  t.is(dayCount(moment("2018-02-04").toDate()).count, 1);
  t.is(dayCount(moment("2018-02-11").toDate()).count, 2);
});

test("imposibble date", t => {
  t.deepEqual(dayCount(moment("2018-01-32").toDate()), {
    day: NaN,
    count: NaN
  });
  t.deepEqual(dayCount(moment("2018-02-29").toDate()), {
    day: NaN,
    count: NaN
  });
});
