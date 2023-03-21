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
                    <TabNav value = "dueDateTab">Due Date</TabNav>
                </TabList>
                <div className="p-4">
                    <TabContent value="myTaskTab">
                        <div className='grid-container' id="myTaskTabContent">

                                
                        </div>
                    </TabContent>
                    <TabContent value="assignedTab">
                        <p>
                                ASSIGNED:
                        </p>
                    </TabContent>
                    <TabContent value="notesTab">
                        <p>
                                NOTES:
                        </p>
                    </TabContent>

                    <TabContent value="dueDateTab">
                        <p>
                                DUE_DATE:
                        </p>

                    </TabContent>

                </div>
            </Tabs>
      </Card>
    </div>
  )
}

export default taskTab
