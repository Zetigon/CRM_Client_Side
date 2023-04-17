import React from 'react'
import { Badge, Card, Tag} from 'components/ui';
import {HiOutlineUserGroup,HiOutlineUser,HiOutlineUserPlus, HiArrowTrendingUp} from 'react-icons/hi2'
import AccountData from './Table/accountsData';
//import AccountsTable from './Table/accounts_table';


function accounts() {
  return (

<div className='grid container-wrapper'>
           <div className='container'>
        <h1 className='text-slate-400 pt-5'>Accounts</h1>
      </div>

<Card className="container pt-0">
{/* ACCOUNTS_OVERALL_STATUS */}

<br/>
<hr/>
<div className="grid justify-center grid-cols-3 gap-4 bg-light">

<row>
{/* Total Number of  Accounts */}
<Card variant className='grid  text-lg text-slate-400  font-mono mb-3' >

<div className='container-grid text-center text-4xl text-slate-400'>
     
            {/* Total_Accounts */}

            <div className='flex grid text-center text-sm text-slate-400'>  
              <div className="justify-center ">
              <center>
                <HiOutlineUserGroup className='text-center  text-white bg-blue-900 p-2  avatar-circle mr-0   ' size={50}/> 
                
                </center> 
              </div>  
              <div className='justify-items-center p-2 text-md text-slate-400'>
                Total Accounts
                <br/>
                <span>
                <h3 className="font-bold text-black">0</h3> 
                </span> 
              </div>    
              <div className='container-grid center p-2 text-sm text-slate-400'>
                <Tag className=" bg-blue-100 text-blue-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
                0.00 
                </Tag>
      
              </div> 

            </div>  

  
</div>

</Card>

</row>

{/* Active Accounts */}
<row>
{/* Total Number of  Accounts */}
<Card variant className='container text-lg text-slate-400  font-mono mb-3' >

<div className='grid container text-center text-4xl text-slate-400'>
     
{/* Total_Accounts */}

  <div className='flex text-center text-sm text-slate-300 '>  
      <span className=" top ">
        <HiOutlineUser className='text-white bg-blue-400 p-2  avatar-circle mr-0   ' size={50}/> 
      </span>  
<span className='text-center p-2 text-md text-slate-400'>
  Active Users<br/>
     <span>
           <h3 className="font-bolder text-black">0</h3> 

      </span> 
  </span>    
     <div className='text-left p-5 text-md text-slate-400'>
      <Tag className="bg-red-100 text-red-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
      0.00 
      </Tag>
    </div> 

  </div>  

  
</div>

</Card>

</row>

     


{/* New Accounts */}
<rows>

<Card variant className='grid-container text-lg text-slate-400  font-mono mb-3' >

<div className='grid container text-center text-1xl text-slate-400'>
     
{/* Total_Accounts */}

  <div className='flex text-center text-sm text-slate-300 '>  
      <span className="top">
        <HiOutlineUserPlus className='text-white bg-green-600 p-2  avatar-circle mr-0   ' size={50}/> 
      </span>  
<span className='text-center p-2 text-md text-slate-400'>
  New Accounts<br/>
     <span>
     <h3 className="font-bolder">0</h3> 
    </span> 
  </span>    
     <div className='grid text-right p-3 text-md text-slate-400'>
      <Tag className="bg-emerald-100 p-1  text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
     <span><HiArrowTrendingUp className='start gap-1'/></span>   <span>0.00 </span>
      </Tag><small className='font-xs'>(this month)</small>
    </div> 

  </div>  

  
</div>

</Card>

</rows>

     

</div>

</Card>
{/* END ACCOUNTS_OVERALL_STATUS */}


{/* ========================================= TABLE SECTION ======================================*/}



{/* {{TABLE_ACCOUNTS}} */}
<div className='container-wrapper' id='account_table'>
  <p className='text-slate-400 pb-2 pt-5 '>
  Recent Accounts:
</p>
 
 {/* {{ACCOUNTS TABLE}} */}
 
  <Card className="grid container-grid">
    <AccountData/>
  </Card>



</div>









</div>
  );
}

export default accounts
