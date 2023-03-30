import { Card } from 'components/ui'
import React from 'react'
import { HiDocumentAdd } from 'react-icons/hi'

function notes() {
  return (
    <div>
      <h1 className='text-slate-400'>Notes</h1>



    <div className='grid container' id="createNote">
    
    <row className="col-grid"> 
     <Card size="sm" width="150">

    <HiDocumentAdd/>

    </Card>
</row>
    
    <row className="grid"> 
     <Card size="sm" width="150">

    <HiDocumentAdd/>

    </Card>
</row>
  
    </div>


    </div>
  )
}

export default notes
