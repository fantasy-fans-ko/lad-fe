export type PageParam = {
  page: number,
  size?: number,
  sort?: {},
}

export type Page<T> = {
  page: number,
  numberOfElement: number,
  size: number,
  totalElements: number,
  totalPages: number,
  content: T,
}
