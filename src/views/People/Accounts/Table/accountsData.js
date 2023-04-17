import React, { Component} from "react";
import { REQUEST_ACCOUNTS_LIST_API } from "constants/api.constant";
import { Button, Input, Table, Pagination,Select } from "components/ui";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import THead from "components/ui/Table/THead";
import TBody from "components/ui/Table/TBody";
import Td from "components/ui/Table/Td";
import { HiOutlineUserAdd,HiCheckCircle, HiOutlineSearch } from "react-icons/hi";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table'
import { values } from "lodash";
import { data } from "autoprefixer";



    const onPaginationChange = (page) => {
        this.setPageIndex(page - 1)
    }

    const onSelectChange = (value) => {
        this.setPageSize(Number(value))
    }
const totalData = data.length


const pageSizeOption = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
    { value: 40, label: '40 / page' },
    { value: 50, label: '50 / page' },
]
class accountData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

    componentDidMount() {
    fetch(REQUEST_ACCOUNTS_LIST_API)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
    };

    
    render(){

    return (

        
        
   
    <div>
            <div className="flex justify-start mb-0">
                <div className="flex items-center">
                        <Input icon={<HiOutlineSearch/>} placeholder="Search Accounts..."/>   
                </div>


                <div className="flex items-center">


                </div>

                



            </div>

                    <div className="flex-wrap flex xl:flex gap-0 justify-end mb-2">
                        <div className="flex items-center">
                    <Button size="sm" className=" text-slate-400 mr-2" icon={<HiOutlineUserAdd/>}> 
                        <span>
                            <span>
                         <a href="/people/accounts/add_account" >add new</a>   
                            </span>
                        </span> 
                        
                        </Button> 
                        </div>
                    </div>

           




              



       <div>
            <Table className="table-flex">  
              
                <THead className="table-virtual">
                    <Tr>
                    <Th>ACCOUNT NAME</Th>
                    <Th>ACCOUNT ADDRESS</Th>
                    <Th>ACCOUNT STATUS </Th>
                    <Th>PRIMARY CONTACT</Th>
                    </Tr>
                </THead>


                <TBody>
                {this.state.data.map(accounts => (
                    <Tr className="table-hover table-flex">
                        <Td>{accounts.name} </Td>
                        <Td>{accounts.address}</Td>
                        
                        <Td>  
                        <span className="flex p-1 items-center text-emerald-500 text-sm">
                            <HiCheckCircle />
                            {accounts.status}
                        </span>
                        </Td>
                        <Td>{accounts.email}</Td>
                    </Tr>
                     ))}

                </TBody>
                </Table>


                <div className="flex  items-center avatar-rounded justify-between mt-4 bg-gray-50">
                <Pagination
                  
                />
                <div style={{ minWidth: 130 }}>
                
                </div>
            </div>
                </div>
    </div>
             
    );
                
  }
  
}

export default accountData;
