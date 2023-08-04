import moment from 'moment'

export function parseDate(date: Date | string): Date {
  return typeof date === 'string' ? new Date(date) : date
}

export function dateToTimestamp(
  date: Date | string,
  length = 10,
): string {
  return moment(date).utcOffset(0).valueOf().toString().slice(0, length)
}

/**
 * Gets start and end dates in seconds
 * and returns difference between them in `HH:mm:ss` format
 *
 * @param start Start date, in seconds
 * @param end End date, in seconds
 *
 * @returns
 * `HH:mm:ss`-string formatted difference between the dates
 */
export function dateToDuration(start: string, end: string): string {
  let startDate = moment(+start * 1000)
  let endDate = moment(+end * 1000)
  let reversing = false
  if (start > end) {
    reversing = true
    ;[startDate, endDate] = [endDate, startDate]
  }
  return `${reversing ? '-' : ''}${endDate.diff(startDate, 'days')} ${moment
    .utc(moment(endDate).diff(moment(startDate)))
    .format('HH:mm:ss')}`
}

export function parseError(message: string | object) {
  if (typeof message === 'object') {
    return JSON.stringify(message)
  }
  return message
}
