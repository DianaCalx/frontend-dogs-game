import { useContext } from 'react'
import BreedsList from './BreedsList'
import Questionnaire from './Questionnaire'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

import './Content.css';

const Content = () => {

  const { allBreeds, breeds } = useContext(AppContext)

  if (!allBreeds.length) {
    return <Spinner />
  }
  
  return (
    <div className='content__container'>
      <div className={`content_breedslist ${breeds.length ? 'd-block' : 'd-none'}`}>
        <BreedsList />
      </div>
      <div className='content__questionnaire'>
        <Questionnaire />
      </div>
    </div>
  )
}

export default Content