import React from 'react'
import { Card, Table} from 'components/ui';
import {HiOutlineUsers,HiOutlineUser,HiOutlineUserPlus} from 'react-icons/hi2'
import Filtering from './Table/accounts_table';

function accounts() {
  return (

<div className='container-wrap'>

{/* ACCOUNTS_OVERALL_STATUS */}
<h3 className='font-bold text-capitalized'>
Accounts
</h3>
<br/>

<div className="grid grid-cols-3 gap-3 bg-light">

{/* Total Number of  Accounts */}
<Card color="secondary" className='cards text-md text-slate-600 font-mono mb-3 dark:text-slate-500' >
  <center className='justify-item-center'><HiOutlineUsers/></center>
<small>Total</small> Accounts

<div className='total-container_grid'>
<div className='total_container'>
      
  

{/* Total_Accounts */}
<b>2343 </b>
</div>

</div>
</Card>

{/* Active Accounts */}
<Card className='cards text-md text-slate-600  font-mono mb-3 dark:text-slate-500'>
  <center className='justify-item-center'><HiOutlineUser/></center>

<small>Active</small> Accounts

<div className='total-container_grid'>
<span className='total-container'>
<b>548</b>
</span>
</div>
</Card>

{/* New Accounts */}
<Card className='cards text-md text-slate-600  font-mono mb-2 dark:text-slate-500'>
    <center className='justify-item-center'><HiOutlineUserPlus/></center>

<small>New</small> Accounts

<div className='total-container_grid'>
<span className='total-container'>
<b>5,4879</b>
</span>
</div>

</Card>

</div>
{/* END ACCOUNTS_OVERALL_STATUS */}


{/* ========================================= TABLE SECTION ======================================*/}



{/* {{TABLE_ACCOUNTS}} */}
<div className='container-wrap' id='account_table'>

  <Filtering/>


</div>








</div>
  );
}

export default accounts
