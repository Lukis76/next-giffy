export const fetcher = (input: RequestInfo, init?: RequestInit): Promise<JSON> =>
  fetch(input, init).then((res) => res.json())
