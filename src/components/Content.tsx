import BreedsList from './BreedsList'
import Questionnaire from './Questionnaire'

import './Content.css';

const Content = () => {
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