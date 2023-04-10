import React from 'react'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
function documents() {
  return (
    <div>
      <div className='container'>
        <h1 className='text-slate-400 pt-5'>Documents</h1>
      </div>

    <div className='grid-container'>
<span>


<HiOutlineDocumentAdd className='text-slate-300' size="lg"/>
<span>
  <p className='text-slate-300 pt-1'>
    <center>Add new documents...</center></p>
</span>

</span>

    </div>      
    </div>
  )
}

export default documents
