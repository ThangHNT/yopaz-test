export interface ItemProps {
  title: string
  list?: {
    item: { title: string; content: string }[]
  }[]
  content?: string
}
