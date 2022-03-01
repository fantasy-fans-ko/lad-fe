type ApiRes<T> = {
  code: string,
  message: string,
  timestamp: number,
  data?: T
}
