import { ENV } from '@/helpers';
import { fetcher } from '@/helpers/fetcher';

const url = `${ENV.BASE_URL_GIFFY}${ENV.GIFFY_SECTION}search?api_key=${ENV.GIFFY_API_KEY}&q=pandas`

export async function GET() {
  const getSearch = await fetcher(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  return new Response(JSON.stringify(getSearch))
}

