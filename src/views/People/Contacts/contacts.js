import React from 'react'
//import Filtering from '../Contacts/Table/contact_table'
import { Card } from 'components/ui'
import ContactData from './Table/contactsData'
function contacts() {
  return (
    <div className='container-wrapper'>

           <div className='container'>
        <h1 className='text-slate-400 pt-5'>Contacts</h1>
      </div>
      <Card>  
  
    

    <Card>


    </Card>


    <div className='grid grid-container'>
    <p className='text-slate-300 pt-2'>
    <b>Recent Contacts</b>  
    </p>

    <ContactData/>
 
    </div>
    </Card>



    </div>
  )
}

export default contacts
