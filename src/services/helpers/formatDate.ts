export const formatDate = (date: Date) => {
  const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dez']
  const day = date.getDate()
  const weekDay = date.getDay()
  const month = date.getMonth()
  const formatedDate = `${weekDays[weekDay]}, ${day} ${months[month]}`
  return formatedDate
}
