import React from 'react'
import { Card} from 'components/ui';
import {HiOutlineUserGroup,HiOutlineUser,HiOutlineUserPlus} from 'react-icons/hi2'
import Filtering from './Table/accounts_table';

function accounts() {
  return (

<div className=' container-wrap'>

{/* ACCOUNTS_OVERALL_STATUS */}
<h3 className='text-slate-400 font-semibold'>
ACCOUNTS
</h3>
<br/>

<div className="flex-1 grid grid-cols-3 gap-3 bg-light">

{/* Total Number of  Accounts */}
<Card variant className=' text-2xl text-slate-400  font-mono mb-3' >
  <div className='total_container text-center text-4xl text-slate-400'>
     
{/* Total_Accounts */}
  <h1  className='container animate-pulse text-left text-4xl text-slate-400'>0</h1> 

  <h4 className='text-left -bottom-4 text-slate-400'>Total Accounts</h4>    
  
 <center><HiOutlineUserGroup className='text-center avatar-circle  pb-2' size={75}/></center> 

</div>
</Card>

{/* Active Accounts */}
<Card variant className=' text-2xl text-slate-400  font-mono mb-3' >
  <div className='total_container text-center text-4xl text-slate-400'>
     
{/* Total_Accounts */}
  <h1  className='container animate-pulse text-left text-4xl text-slate-400'>0</h1> 

  <h4 className='text-left -bottom-4 text-slate-400'>
   <span className='fluid  w-20  p-1 radius-15'>
    Active Accounts</span> 
    </h4>    
  
 <center><HiOutlineUser className='bg-blue-400 text-white text-center avatar-circle  pb-2' size={75}/></center> 

</div>
</Card>

{/* New Accounts */}
<Card variant className=' text-2xl text-slate-400  font-mono mb-3' >
  <div className='total_container text-center text-4xl text-slate-400'>
     
{/* Total_Accounts */}
  <h1  className='container animate-pulse text-left text-4xl text-slate-400'>0</h1> 

  <h4 className='text-left -bottom-4 text-slate-400'>New Accounts</h4>    
  
 <center><HiOutlineUserPlus className='bg-green-400 text-white text-center avatar-circle  pb-2' size={75}/></center> 

</div>
</Card>

</div>
{/* END ACCOUNTS_OVERALL_STATUS */}


{/* ========================================= TABLE SECTION ======================================*/}



{/* {{TABLE_ACCOUNTS}} */}
<div className='container-wrapper' id='account_table'>
 <Card className="grid container-grid">
  <Filtering/>
 </Card>



</div>








</div>
  );
}

export default accounts
