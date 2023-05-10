import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

import './Questionnaire.css';

const Questionnaire = () => {
  const { currentBreed, finished, imageUrl, isCheatMode, randomItems, score, decreaseScore, increaseScore, newGame, switchMode  } = useContext(AppContext)
  const [selectedDog, setSelectedDog] = useState<string>('')

  const handleSelect = () => {
    if (selectedDog === currentBreed) {
      increaseScore()
    } else {
      decreaseScore()
    }
    setSelectedDog('')
  }

  if (score <= 0 || finished) {
    return (
      <>
        {
          <h1>
            {finished 
            ? <div>
                <p className='questionnaire__win'>You win, congratulations!</p>
                <p className='questionnaire__score'>Score: {score}</p>
              </div>
            :<p className='questionnaire__lost'>Sorry, you lost</p>}
          </h1>
        }
        <button className='questionnaire__reset' onClick={newGame}>Reset the game</button>
      </>
    )
  }

  return (
    <>
      <h1>Questionnaire</h1>
      {
        currentBreed && (
          <div className='questionnaire__data'>
          <div className='questionnaire__mode'>
            <button onClick={switchMode} className='questionnaire__cheatbutton'>Swich game to {isCheatMode ? 'normal' : 'cheat'} mode</button>
            {isCheatMode && <span className='questionnaire__cheatmode'>Answer: {currentBreed}</span>}
          </div>
          <h3>Score: {score}pts</h3>
        </div>
        )
      }
      {imageUrl && <img alt="Dog breed" src={imageUrl} className='image__breed'/>}
      <div className='container__breeds'>
        {randomItems.map(dog => (
          <div key={`option-${dog}`} className='container__breed'>
            <input type='radio' id={`option-${dog}`} value={dog} checked={selectedDog === dog} onChange={() => setSelectedDog(dog)} className='breed__radio' />
            <label htmlFor={`option-${dog}`}>{dog}</label>
          </div>
        ))}
      </div>
      {currentBreed ? (
        <button className='questionnaire__button' onClick={handleSelect} disabled={!selectedDog}>Check</button>
      ) : (
        <button className='questionnaire__button' onClick={newGame}>Let's play!</button>
      )}
    </>
  )
}

export default Questionnaire
