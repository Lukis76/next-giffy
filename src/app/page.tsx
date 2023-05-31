'use client'

import { ENV } from '@/helpers'
import { fetcher } from '@/helpers/fetcher'
import useSWR from 'swr'

export default function Home() {
  // api.giphy.com/v1/gifs/search?api_key=sIJ7HhM4C8CPDGsqZBDH3AmaqHTNfuad&q=pandas
  // const url = `${ENV.BASE_URL_GIFFY}${ENV.GIFFY_SECTION}search?api_key=${ENV.GIFFY_API_KEY}&q=pandas`
  // console.log("🚀 ~ file: page.tsx:11 ~ Home ~ url:", url)

  const { data } = useSWR('/api/giffy', fetcher)
  console.log("🚀 ~ file: page.tsx:12 ~ Home ~ data:", data)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {!!data && JSON.stringify(data)}!
    </main>
  )
}
