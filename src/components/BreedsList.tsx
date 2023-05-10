
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ReactComponent as CheckMark } from '../assets/check-mark.svg';

import './BreedsList.css';

const BreedsList = () => {
  const { breeds, guessed} = useContext(AppContext)

  const isGuessedBreed = (breed: string) => {
    const isGuessed = guessed.some(item => item === breed)
    return isGuessed
  }
  
  return (
    <>
      <h2 className='breedslist__title'>List of breeds</h2>
      {breeds.map(breed => (
        <div key={breed} className='breed'>
          {isGuessedBreed(breed) && <CheckMark  className='breed__checkmark'/>}
          <p className='breed__name'>{breed}</p>
        </div>
      ))}
    </>
  )
}

export default BreedsList