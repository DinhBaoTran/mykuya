function howManyDaysBetweenTwoDates(date1, date2) {
  const milisecondsBetween = date2 - date1;
  return Math.ceil(milisecondsBetween / (24 * 60 * 60 * 1000));
}

module.exports = howManyDaysBetweenTwoDates;
