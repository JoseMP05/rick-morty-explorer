export async function fetchData<T>(
  url: string, 
  options?: RequestInit,
  validateResponse?: (response: Response) => void
): Promise<T> {
  const response = await fetch(url, options)

  if(validateResponse){
    validateResponse(response)
  }

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}