import React from 'react'
import { Card} from 'components/ui';
import {HiOutlineUserGroup,HiOutlineUser,HiOutlineChartBar} from 'react-icons/hi2'
import Filtering from './Table/accounts_table';

function accounts() {
  return (

<div className=' container-wrapper'>

<h3 className='text-slate-400 pb-2 font-bold'>
<b>ACCOUNTS</b>
</h3>

<Card className="grid pt-2">
{/* ACCOUNTS_OVERALL_STATUS */}
<div className='grid container'>
  <h5 className='text-slate-300'>Dashboard</h5>
</div>
<br/>
<hr/>
<div className="grid  grid-cols-3 gap-3 bg-light">

{/* Total Number of  Accounts */}
<Card variant className=' text-lg text-slate-400  font-mono mb-3' >

<div className='grid container text-center text-4xl text-slate-400'>
     
{/* Total_Accounts */}

  <center><HiOutlineUserGroup className='right avatar-circle  pb-2 ' size={75}/></center>  <hr/>
  <p className='text-left text-sm text-slate-300 '>Total Accounts:  
    <p className='animate-pulse text-left text-md text-slate-400'>
      0
    </p> 

  </p>  

    <small className='text-left text-sm text-slate-300 '>Percentage:   
    <p className='animate-pulse text-left text-md text-slate-400'>
      0.00 %
    </p> 

  </small>
</div>

</Card>


{/* Active Accounts */}
<Card variant className=' text-lg text-slate-400  font-mono mb-3' >

<div className='grid container text-center text-4xl text-slate-400'>
     
{/* Total_UserAccounts */}
 
  <center><HiOutlineUser className='right avatar-circle  pb-2 ' size={75}/></center> 
<hr/>
  <small className='text-left text-sm text-slate-300 '>Active Users:  
    <p className='animate-pulse text-left text-md text-slate-400'>
      0
    </p> 

  </small>  

    <small className='text-left text-sm text-slate-300 '>Percentage:   
    <p className='animate-pulse text-left text-md text-slate-400'>
      0.00 %
    </p> 

  </small>
</div>

</Card>
     


{/* New Accounts */}
<Card variant className=' text-lg text-slate-400  font-mono mb-3' >

<div className='grid container text-center text-4xl text-slate-400'>
     
{/* Total_UserAccounts */}
 
  <center><HiOutlineChartBar className='text-right avatar-circle  pb-2 ' size={75}/></center> 
<hr/>
  <small className='text-left text-sm text-slate-300 '>Sales<small><i> (Weekly|Monthly)</i></small>  
    <p className='animate-pulse text-left text-md text-slate-400'>
      0
    </p> 

  </small>  

    <small className='text-left text-sm text-slate-300 '>Percentage:   
    <p className='animate-pulse text-left text-md text-slate-400'>
      0.00 %
    </p> 

  </small>
</div>

</Card>
     

</div>

</Card>
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
