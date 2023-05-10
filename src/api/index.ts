export const getBreeds = async () => {
  try {
    const api = await fetch('https://backend-dogs-game.herokuapp.com/dogs')
    const response = await api.json()
    return response
  } catch (e) {
    console.log(e);
  }
}

export const getDogImage = async (breed: string) => {
  try {
    const api = await fetch(`https://backend-dogs-game.herokuapp.com/dog?breed=${breed}`)
    const response = await api.json()
    return response
  } catch (e) {
    throw new Error(String(e));
  }
}
