import { format, parseISO } from 'date-fns'

export const formatDate = (date: string | Date, formatStr = 'PP'): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, formatStr)
}

export const formatDateTime = (date: string | Date): string => {
  return formatDate(date, 'PPpp')
}

export const formatRelative = (date: string | Date): string => {
  return formatDate(date, 'PPPP')