import Search from 'components/template/Search'
import React from 'react'
import TaskTab from './Task_Tabs/taskTab'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
function tasks() {
  return (
    <div>
      <h2 className='text-slate-400'>Tasks</h2>
    <br/>
    <div className='flex container-grid pt-2 pb-2 ' id='task_search'>
        <Search className="text-slate-400" />

    </div>
    
    <div className='grid'>

    <TaskTab/>
    </div>


    <div className='grid' id='documents_tasks_container'>

      <div className='container'>
        <h1 className='text-slate-400 pt-5'>Documents</h1>
      </div>

    <div className='grid-container'>
<span>

<HiOutlineDocumentAdd className='text-slate-300' size="lg"/>


</span>

    </div>




    </div>


    </div>
  )
}

export default tasks
