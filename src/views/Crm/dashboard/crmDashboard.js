import React from 'react'
import AccountLeads from './leadsData'
import { Badge, Card, Tag } from 'components/ui'
import { Chart, RegionMap } from 'components/shared'
import CrmWorldMap from '../Crm_map/crm_map'
import ReactApexChart from 'react-apexcharts'
import MapChartWithTooltip from './chartMap'
import SimpleDonut from './donutChart'
function crmDashboard() {
  return (
    <div>
      <h5 className='text-slate-300'><b>DASHBOARD</b></h5>


      <div className='grid container-grid' id='crmStats'>

      <div className='grid' id="crm_Stats_container">



      </div>

      </div>






    <div className="grid grid-rows-12 grid-flow-col gap-0">
     
      <div  className="row-span-3 col-span-1 ...">

        <Card>
      <p className='text-slate-600 pb-5 pt-0 font-bold '>
            <b>Leads By Countries </b>
        </p> 
        <RegionMap></RegionMap>
        </Card>


      </div> <div  className="row col-span-1...">
        <span className='grid'>
          <Card>
          <p className='text-slate-600 pb-5 pt-0 font-bold '>
          </p> 
          <span className='grid'>
                        <b>E-Mails</b>

            <span>
              <SimpleDonut/>
            </span>  
          
            <span className='grid'>
            <ul>
            <li >     
              


            </li>

            </ul>
            </span>
          </span>
           
            
          </Card>
        
        </span>

      </div>
    </div>


  {/* {{TABLE_ACCOUNTS_LEADS}} */}
    <div className='container-wrapper pt-5' id='account_table'>
        <p className='text-slate-500 pb-2 pt-5 font-bold '>
        ACCOUNTS
        </p>
 
  {/* {{ACCOUNTS LEADS}} */}
 
      <Card className="grid container-grid">
        <AccountLeads/>
      </Card>

    </div>



    </div>
  )
}



export default crmDashboard
