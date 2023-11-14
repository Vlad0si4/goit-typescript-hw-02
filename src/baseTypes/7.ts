/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum dayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: dayOfWeek): boolean => {
  switch (day) {
    case dayOfWeek.Saturday:
      return true;

    case dayOfWeek.Sunday:
      return true;

    default:
      return false;
  }
};

isWeekend(dayOfWeek.Monday);
