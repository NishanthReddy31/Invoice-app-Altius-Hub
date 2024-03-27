import React from 'react'
import { Row } from 'react-bootstrap'
import { Navigate, useNavigate } from "react-router-dom";

const AddInvoice = () => {
    const navigate = useNavigate();
    const cancelHandler = () => {
        navigate('/invoiceList');
    }
    const submitHandler = (event) => {
        //saving the record to db;
        // if (event) {
        //     const formData = new FormData(event.target);
        //     const date = formData.get('date');
        //     if (date < new Date()) {
        //         alert("Please provide a valid date");
        //     }
        // }


    }
    return (
        <div className='g-0 add-box'>
            <Row className='g-0 heading col-md-6'>
                Create a new invoice
            </Row>
            <form className='invoiceForm'>
                <div class="form-row col-md-6">
                    <label for="inputid">ID</label>
                    <input type="text" class="form-control" id="id" placeholder="" required />
                </div>
                <div class="form-row col-md-6">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" placeholder="" required />
                </div>
                <div class="form-row col-md-6">
                    <label for="date">InvoiceNumber</label>
                    <input type="number" class="form-control" id="invoiceNumber" placeholder="" required />
                </div>
                <div class="form-row col-md-6">
                    <label for="customerName">ID</label>
                    <input type="text" class="form-control" id="customerName" placeholder="" required />
                </div>
                <div class="form-group col-md-6">
                    <label for="billingAddress">Billing Address</label>
                    <input type="text" class="form-control" id="billingAddress" placeholder="" required />
                </div>
                <div class="form-group col-md-6">
                    <label for="shippingAddress">Shipping Address</label>
                    <input type="text" class="form-control" id="shippingAddress" placeholder="" required />
                </div>
                <div class="form-group col-md-6">
                    <label for="Items">Items</label>
                    <input type="text" class="form-control" id="Items" placeholder="" required />
                </div>
                <div class="form-group col-md-6">
                    <label for="BillSundrys">Bill Sundrys</label>
                    <input type="text" class="form-control" id="BillSundrys" placeholder="" required />
                </div>
                <div class="form-row col-md-6">
                    <label for="toalAmount">Total amount</label>
                    <input type="number" class="form-control" id="toalAmount" placeholder="" required />
                </div>

                <button type="submit" class="btn btn-primary" onClick={submitHandler}>Create invoice</button>
                <button type="submit" class="btn btn-secondary" onClick={cancelHandler}>Cancel</button>
            </form>
        </div>

    )
}

export default AddInvoice