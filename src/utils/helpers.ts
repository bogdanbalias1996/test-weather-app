import moment from 'moment'

export const celsiusToFahrenheit = (celsius: number): number => {
  const fahrenheit = (celsius * 9) / 5 + 32
  return Number(fahrenheit.toFixed())
}

export const getLocalDate = (timezone: number): string => {
  const local_date = moment()
    .utcOffset(timezone / 60)
    .format('HH:mm')
  return local_date
}
