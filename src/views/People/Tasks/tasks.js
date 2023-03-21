import Search from 'components/template/Search'
import React from 'react'
import TaskTab from './Task_Tabs/taskTab'
function tasks() {
  return (
    <div>
      <h2 className='text-slate-300'>Tasks</h2>
    <br/>
    <div className='flex container-grid pt-2 pb-2 ' id='task_search'>
        <Search className="text-slate-400" />

    </div>
    
    <div className='grid'>

<TaskTab/>
    </div>



    </div>
  )
}

export default tasks
