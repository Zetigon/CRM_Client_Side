import React from 'react'



function accounts() {
  return (

<div className='container-wrap'>
<span className='container-wrap'>
  
</span>

<h3 className='text-mute-center'>
Accounts
</h3>
<br/>




<div className="grid grid-cols-3 gap-3 bg-amber-200">

{/* Total Number of  Accounts */}
<div className='cards'>


<small>Total</small> Accounts

<div className='total-container_grid'>
<span className='total-container'>
  457
</span>
</div>

</div>



{/* Active Accounts */}

<div className='cards'>
<small>Active</small> Accounts

<div className='total-container_grid'>
<span className='total-container'>
  1,457
</span>
</div>




</div>


{/* New Accounts */}
<div className='cards'>
<small>New</small> Accounts

<div className='total-container_grid'>
<span className='total-container'>
  57
</span>
</div>

</div>






</div>


</div>
  );
}

export default accounts
