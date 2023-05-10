export const getBreeds = async () => {
  try {
    const url = import.meta.env.VITE_API_URL;
    const api = await fetch(`${url}/dogs`)
    const response = await api.json()
    return response
  } catch (e) {
    console.log(e);
  }
}

export const getDogImage = async (breed: string) => {
  try {
    const url = import.meta.env.VITE_API_URL;
    const api = await fetch(`${url}/dog?breed=${breed}`)
    const response = await api.json()
    return response
  } catch (e) {
    throw new Error(String(e));
  }
}