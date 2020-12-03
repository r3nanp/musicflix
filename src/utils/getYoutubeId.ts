// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function getYoutubeId(youtubeURL: string | undefined) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  )
}
