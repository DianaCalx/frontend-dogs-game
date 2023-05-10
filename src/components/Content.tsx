import { useContext } from 'react'
import BreedsList from './BreedsList'
import Questionnaire from './Questionnaire'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

import './Content.css';

const Content = () => {

  const { breeds } = useContext(AppContext)

  if (!breeds.length) {
    return <Spinner />
  }
  
  return (
    <div className='content__container'>
      <div className='content_breedslist'>
        <BreedsList />
      </div>
      <div className='content__questionnaire'>
        <Questionnaire />
      </div>
    </div>
  )
}

export default Content