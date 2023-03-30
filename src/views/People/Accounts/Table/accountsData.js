import React, { Component} from "react";
import { REQUEST_ACCOUNTS_LIST_API } from "constants/api.constant";
import { Button, Input, Table } from "components/ui";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import THead from "components/ui/Table/THead";
import TBody from "components/ui/Table/TBody";
import Td from "components/ui/Table/Td";
import { HiOutlineUserAdd } from "react-icons/hi";




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
            <div className="flex justify-start">
                <div className="flex items-center">
                    <span className="mr-2">Search:</span>
                        <Input placeholder="Search Accounts..."/>   
                </div>
            </div>

                    <div className="flex-wrap flex xl:flex gap-2 justify-end pt-0">
                        <div className="flex items-center">
                    <Button className=" text-slate-400 mr-2" icon={<HiOutlineUserAdd/>}> 
                        <span>
                            <span>
                         <a href="/people/accounts/add_account" >ADD ACCOUNT</a>   
                            </span>
                        </span> 
                        
                        </Button> 
                        </div>
                    </div>

           




              



       <div>
            <Table>  
              
                <THead>
                    <Tr>
                    <Th>ACCOUNT NAME</Th>
                    <Th>ACCOUNT ADDRESS</Th>
                    <Th>ACCOUNT STATUS </Th>
                    <Th>PRIMARY CONTACT</Th>
                    </Tr>
                </THead>


                <TBody>
                {this.state.data.map(accounts => (
                    <Tr>
                        <Td>{accounts.name} </Td>
                        <Td>{accounts.address}</Td>
                        <Td>{accounts.status}</Td>
                        <Td>{accounts.holder}</Td>
                    </Tr>
                     ))}

                </TBody>
                </Table>
                </div>
    </div>
             
    );
                
  }
  
}

export default accountData;
