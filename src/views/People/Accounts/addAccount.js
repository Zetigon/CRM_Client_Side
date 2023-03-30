
import React, { useState } from 'react'
import {
    Input,
    Button,
    FormItem,
    FormContainer,
    InputGroup,
    Checkbox,
    Card,
} from 'components/ui'
import { Formik, Field, Form } from 'formik'
import { boolean } from 'yup'


const Layout = () => {
 
    

    return (
        <div className='grid'>
                  <h4 className='text-slate-600 text-center avatar-circle'>Create New Account</h4>

          <Card>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    address:'',
                    country:'',
                    status:'',
                    state:'',
                    account_holder:'',
                    is_Active:boolean,
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    <FormContainer >
                        <FormItem label="Account Name">
                            <Field
                                type="text"
                                name="name"
                                placeholder="Please enter account name"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem label="Account Address">
                            <Field
                                type="text"
                                name="address"
                                placeholder="Please enter account address"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem label="Account Status">
                            <Field
                                type="text"
                                name="status"
                                placeholder="Please select account status"
                                component={Input}
                            />
                        </FormItem>
                        <FormItem label="E-mail">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Please enter account email"
                                component={Input}
                            />
                        </FormItem>
                        <FormItem label="State / Province">
                            <Field
                                type="text"
                                name="state"
                                placeholder="Please enter your state/province"
                                component={Input}
                            />
                        </FormItem>
                        <FormItem label="Country">
                            <Field
                                type="text"
                                name="country"
                                placeholder="Please choose your country"
                                component={Input}
                            />
                        </FormItem>
                        <FormItem label="Account Holder">
                            <Field
                                type="text"
                                name="account_holder"
                                placeholder="Please select account holder"
                                component={Input}
                            />
                        </FormItem>

                       <FormItem label="is_Active">
                            <Field
                                type="checkbox"
                                name="is_Active"
                                component={Checkbox}
                            />
                        </FormItem>

                        <FormItem className = "text-center">
                            <Button variant="default" size="sm" className="justify-center" type="submit"><span className='text-slate-500'>ADD ACCOUNT</span> </Button>
                        </FormItem>
                    </FormContainer>
                </Form>
            </Formik>
            </Card>
        </div>
    )
}

export default Layout

