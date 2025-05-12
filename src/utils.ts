export function parseDate(dateStr: string) {
  const monthNamesUz = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  const date = new Date(dateStr);

  return {
    year: date.getFullYear(),
    month: monthNamesUz[date.getMonth()],
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}
