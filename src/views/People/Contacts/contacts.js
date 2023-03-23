import React from 'react'
//import Filtering from '../Contacts/Table/contact_table'
import { Card } from 'components/ui'
import Query from '../Contacts/Table/contact_table'

function contacts() {
  return (
    <div className='container-wrapper'>

      <Card>  7
        <h2 className='text-slate-400'>
         <b>CONTACTS</b>  
        </h2>
    
      <Card>


      </Card>


        <div className='grid grid-container'>
          <p className='text-slate-300 pt-2'>
         <b>Recent Contacts</b>  
        </p>
        </div>

      <Query/>


      </Card>



    </div>
  )
}

export default contacts
