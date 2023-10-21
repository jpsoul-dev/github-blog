import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDistanceCustom(date: Date, dateBase: Date) {
  let result = !Number.isNaN(new Date(date).getTime())
    ? formatDistance(date, dateBase, {
        locale: ptBR,
      })
    : new Error('invalid date time').message
  result = result.replace('cerca de', 'Há')
  return result
}
