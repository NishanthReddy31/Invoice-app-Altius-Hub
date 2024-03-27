import React from 'react'
import { Row } from 'react-bootstrap'
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";

const UpdateInvoice = () => {
    const navigate = useNavigate();
    const cancelHandler = ()=>{
        navigate('/invoiceList');
    }
    const submitHandler = ()=>{
        //saving the record to db;
    }
    const deleteHandler = ()=>{
        //deleting the record from db;
    }
    return (
        <div className='g-0 add-box'>
            <Row className='g-0 heading col-md-6'>  
                Update the invoice
            </Row>
            <form>
                <div class="form-row col-md-6">
                    <label for="inputid">ID</label>
                    <input type="text" class="form-control" id="id" placeholder="" />
                </div>
                <div class="form-row col-md-6">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" placeholder="" />
                </div>
                <div class="form-row col-md-6">
                    <label for="date">InvoiceNumber</label>
                    <input type="number" class="form-control" id="invoiceNumber" placeholder="" />
                </div>
                <div class="form-row col-md-6">
                    <label for="customerName">ID</label>
                    <input type="text" class="form-control" id="customerName" placeholder="" />
                </div>
                <div class="form-group col-md-6">
                    <label for="billingAddress">Billing Address</label>
                    <input type="text" class="form-control" id="billingAddress" placeholder="" />
                </div>
                <div class="form-group col-md-6">
                    <label for="shippingAddress">Shipping Address</label>
                    <input type="text" class="form-control" id="shippingAddress" placeholder="" />
                </div>
                <div class="form-group col-md-6">
                    <label for="Items">Items</label>
                    <input type="text" class="form-control" id="Items" placeholder="" />
                </div>
                <div class="form-group col-md-6">
                    <label for="BillSundrys">Bill Sundrys</label>
                    <input type="text" class="form-control" id="BillSundrys" placeholder="" />
                </div>
                <div class="form-row col-md-6">
                    <label for="toalAmount">Total amount</label>
                    <input type="number" class="form-control" id="toalAmount" placeholder="" />
                </div>
                
                <button type="submit" class="btn btn-primary" onClick={submitHandler}>Update invoice</button>
                <button type="submit" class="btn btn-secondary" onClick={cancelHandler}>Cancel</button>
                <button type="submit" class="btn btn-delete" onClick={deleteHandler}>Delete</button>

            </form>
        </div>

    )
}

export default UpdateInvoice