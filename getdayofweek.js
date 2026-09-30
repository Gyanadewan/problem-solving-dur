function getDayOfWeek(year, month, day) {
  const date = new Date(year, month - 1, day);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
}

console.log(getDayOfWeek(2024, 5, 11));
// "Saturday"

console.log(getDayOfWeek(2023, 1, 1));
// "Sunday"