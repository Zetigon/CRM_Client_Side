import Search from 'components/template/Search'
import React from 'react'
import TaskTab from './Task_Tabs/taskTab'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
function tasks() {
  return (
    <div>
           <div className='container'>
        <h1 className='text-slate-400 pt-5'>Tasks</h1>
      </div>    <br/>
    <div className='flex container-grid pt-2 pb-2 ' id='task_search'>
        <Search className="text-slate-400" />

    </div>
    
    <div className='grid'>

    <TaskTab/>
    </div>
    <br/>
<hr/>

    <div className='grid' id='documents_tasks_container'>

      <div className='container'>
        <h5 className='text-slate-300 pt-5'>Documents Added:</h5>
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
