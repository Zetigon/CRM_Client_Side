import React from 'react'
import Filtering_Contacts from './Table/contact_table'

function contacts() {
  return (
    <div className='container-wrap'>
        <h1 className='color-grey-400'>Contacts</h1>
      

      <div className='grid container'>
      <Filtering_Contacts/>
      </div>





    </div>
  )
}

export default contacts
