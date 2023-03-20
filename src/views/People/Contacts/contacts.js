import React from 'react'
import Filtering from '../Contacts/Table/contact_table'
import { Card } from 'components/ui'

function contacts() {
  return (
    <div className='container-wrapper'>

      <Card>  
        <h4 className='text-slate-400'>
         <b>RECENT CONTACTS</b>  
        </h4>
    
        <div className='grid grid-container'>
          <Filtering/>
        </div>
      </Card>



    </div>
  )
}

export default contacts
