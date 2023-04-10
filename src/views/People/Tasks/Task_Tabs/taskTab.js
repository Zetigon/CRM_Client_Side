import React from 'react';
import { Card, Tabs} from 'components/ui';


const {TabContent,TabNav,TabList} =Tabs


function taskTab() {
  return (
    <div className='container-grid justify-center'> 

    <Card>

     <Tabs defaultView="myTaskTab " className="text-slate-400">
                <TabList>
                    <TabNav value="myTaskTab">My Tasks</TabNav>
                    <TabNav value="assignedTab">Assigned</TabNav>
                    <TabNav value="notesTab">Notes</TabNav>
                    <TabNav value = "dueDateTab">Task due date</TabNav>
                </TabList>
                <div className="p-4">
                    <TabContent value="myTaskTab">
                        <div className='grid-container' id="myTaskTabContent">

                            <span className='text-slate-300-center'>
                                <center>No new tasks.......</center>
                            </span>
                                
                        </div>
                    </TabContent>
                    <TabContent value="assignedTab">
                              <span className='text-slate-300-center'>
                                <center>No assigned tasks.......</center>
                            </span>
                    </TabContent>
                    <TabContent value="notesTab">
                            <span className='text-slate-300-center'>
                                <center>No new notes......</center>
                            </span>
                    </TabContent>

                    <TabContent value="dueDateTab">
                             <span className='text-slate-300-center'>
                                <center>No tasks due yet.......</center>
                            </span>

                    </TabContent>

                </div>
            </Tabs>
      </Card>
    </div>
  )
}

export default taskTab
