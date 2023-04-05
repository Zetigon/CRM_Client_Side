import React from 'react'
import AccountLeads from './leadsData'
import { Badge, Card, Tag } from 'components/ui'
import { Chart, RegionMap } from 'components/shared'
import CrmWorldMap from '../Crm_map/crm_map'
import ReactApexChart from 'react-apexcharts'
function crmDashboard() {
  return (
    <div>
      <h5 className='text-slate-300'><b>DASHBOARD</b></h5>


      <div className='grid container-grid' id='crmStats'>

      <div className='grid' id="crm_Stats_container">



      </div>

      </div>






    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div width={550} className="row-span-3 ...">
        <span className=' flex grid'>
          <Card>
          <p className='text-slate-600 pb-5 pt-0 font-bold '>
            <b>Leads By Countries </b>
          </p> 
          <span className='container'>
            
            <span>
            <RegionMap  />
            </span>  
          
            <span className='grid'>
            <ul>
            <li >     
              


            <div className="p-2"> 
            

            {/* COUNTRY_LISTED_NAME */}
            <span>
              
                 <Tag prefix prefixClass="bg-emerald-500">
                  South Africa 
                </Tag>
              </span>
                
        

            {/* COUNTRY_LISTED__PERCENTAGE */}
            <span className='p-5 right inline justify-end'>
              <span>
              0.00% 
              </span> 
            </span> 

            </div>
            </li>

            </ul>
            </span>
          </span>
           
            
          </Card>
        
        </span>

      </div>
      <div className="row-span-3 col-span-1 ...">

        <Card>
      <p className='text-slate-600 pb-5 pt-0 font-bold '>
        <b>E-mails Sent </b>
        </p> 
        <Chart type='pie'></Chart>
        </Card>


      </div>
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
  )
}



export default crmDashboard
