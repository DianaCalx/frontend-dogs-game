const url = 'https://backend-dogs-game.herokuapp.com';

export const getBreeds = async () => {
  try {
    const api = await fetch(`${url}/dogs`)
    const response = await api.json()
    return response
  } catch (e) {
    console.log(e);
  }
}

export const getDogImage = async (breed: string) => {
  try {
    const api = await fetch(`${url}/dog?breed=${breed}`)
    const response = await api.json()
    return response
  } catch (e) {
    throw new Error(String(e));
  }
}