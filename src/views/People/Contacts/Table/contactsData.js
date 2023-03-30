import React, { Component } from "react";
import { REQUEST_CONTACTS_LIST_API } from "constants/api.constant";
import { Table } from "components/ui";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import THead from "components/ui/Table/THead";
import TBody from "components/ui/Table/TBody";
import Td from "components/ui/Table/Td";


class contactData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

componentDidMount() {
    fetch(REQUEST_CONTACTS_LIST_API)
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

  render() {
    return (
   
     
            <Table>  
                
                <THead>
                    <Th>Contact Name</Th>
                    <Th>Full Name</Th>
                    <Th>Marketing Status </Th>
                    <Th>Last Updated</Th>

                </THead>
                <TBody>
                {this.state.data.map(contacts => (
                    <Tr>
                        <Td>{contacts.first_name} </Td>
                        <Td>{contacts.last_name}</Td>
                        <Td>{contacts.marketing_status}</Td>
                        <Td>{contacts.date_created}</Td>
                    </Tr>
                     ))}

                </TBody>
                </Table>
            
    );

  }
  
}

export default contactData;

