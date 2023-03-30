import React from 'react'
import { Badge, Card, Tag} from 'components/ui';
import {HiOutlineUserGroup,HiOutlineUser,HiOutlineUserPlus, HiArrowTrendingUp} from 'react-icons/hi2'
import AccountData from './Table/accountsData';
//import AccountsTable from './Table/accounts_table';
import Query from './Table/accounts_table';
import AccountLeads from './Table/accountLeads';

function accounts() {
  return (

<div className='container-wrapper'>

<h3 className='text-slate-600 pb-2 font-bold'>
<b>Accounts</b>
</h3>

<Card className="container pt-0">
{/* ACCOUNTS_OVERALL_STATUS */}

<br/>
<hr/>
<div className="grid justify-center grid-cols-3 gap-4 bg-light">

<row>
{/* Total Number of  Accounts */}
<Card variant className='grid  text-lg text-slate-400  font-mono mb-3' >

<div className='grid container text-center text-4xl text-slate-400'>
     
{/* Total_Accounts */}

  <div className='flex text-center text-sm text-slate-300 '>  
      <span className=" top ">
        <HiOutlineUserGroup className='text-white bg-blue-900 p-2  avatar-circle mr-0   ' size={50}/> 
      </span>  
<span className='text-center p-2 text-md text-slate-400'>
  Total Accounts<br/>
     <span>0</span> 
  </span>    
        <div className='text-left p-5 text-md text-slate-400'>
      <Tag className="bg-blue-100 text-blue-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
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
        <HiOutlineUser className='text-white bg-blue-400 p-2  avatar-circle mr-0   ' size={65}/> 
      </span>  
<span className='text-center p-2 text-md text-slate-400'>
  Active Users<br/>
     <span>0</span> 
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
      <Tag className="bg-emerald-100 pl-1 pr-1 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
     <span><HiArrowTrendingUp className='start gap-1'/></span>   <span>0.00 </span>
      </Tag><small className='text-xsm'>(this month)</small>
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
  <p className='text-slate-500 pb-2 pt-5 font-bold '>
  Recent Accounts
</p>
 
 {/* {{ACCOUNTS TABLE}} */}
 
  <Card className="grid container-grid">
    <AccountData/>
  </Card>



</div>


{/* {{TABLE_ACCOUNTS_LEADS}} */}
<div className='container-wrapper pt-5' id='account_table'>
  <p className='text-slate-500 pb-2 pt-5 font-bold '>
  Leads
</p>
 
 {/* {{ACCOUNTS LEADS}} */}
 
  <Card className="grid container-grid">
    <AccountLeads/>
  </Card>



</div>






</div>
  );
}

export default accounts
