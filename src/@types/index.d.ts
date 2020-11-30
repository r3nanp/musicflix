export interface LoadingProps {
  isLoading: boolean
}

export interface DataOptions {
  title: string
  color: string
  videos: Array<{
    title: string
    url: string
  }>
}
