import React from 'react'
import { Row, Col } from 'react-bootstrap';
import "./style.css";
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';



const InvoiceList = () => {
    let active = 1;
    let items = [];
    const invoiceItems = [
        {
            id: "901",
            date: "27-03-2024",
            InvoiceNumber: 1,
            CustomerName: "name1",
            BillingAddress: "Billingaddress1",
            ShippingAddress: "ShippingAddress1",
            GSTIN: "01",
            Items: [
                {
                    id: "1",
                    itemName: "item1",
                    quantity: 1,
                    price: 200

                },
                {
                    id: "2",
                    itemName: "item2",
                    quantity: 1,
                    price: 300

                }
            ],
            BillSundrys: [
                {
                    Id: "1",
                    billSundryName: "name1",
                    amount: -10,

                }
            ],
            TotalAmount: 490,


        },
    ]
    for (let number = 1; number <= (invoiceItems.length/5) +1 ; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }
    return (
        <Row className='g-0 list-container'>
            <Row className='g-0 heading'>
                Invoice List
            </Row>
            <Row className='g-0 add-btn'>
                <Link to={{ pathname: "/addInvoice" }}>ADD Invoice</Link>
            </Row>
            <Row className='invoice-table g-0'>
                <Row className='g-0 tableHeading d-flex justify-content-start '>
                    <Col className='g-0 rb id d-flex justify-content-center' lg={1}>ID</Col>
                    <Col className='g-0 rb date' lg={1}>date</Col>
                    <Col className='g-0 rb InvoiceNumber' lg={1}>InvoiceNumber</Col>
                    <Col className='g-0  rb CustomerName' lg={1}>CustomerName</Col>
                    <Col className='g-0 rb BillingAddress' lg={1}>BillingAddress</Col>
                    <Col className='g-0 rb ShippingAddress' lg={1}>ShippingAddress</Col>
                    <Col className='g-0 rb GSTIN' lg={1}>GSTIN</Col>
                    <Col className='g-0 rb Items' lg={2}>
                        <Row className='g-0 items-header'>
                            <Col className='g-0 rb item-id' lg={2}> ID</Col>
                            <Col className='g-0 rb itemName' lg={2}>Item Name</Col>
                            <Col className='g-0 rb quantity' lg={2}>Qty</Col>
                            <Col className='g-0 rb Price' lg={2}>Price</Col>
                            <Col className='g-0 rb amount' lg={2}>Amount</Col>
                        </Row>
                    </Col>
                    <Col className='g-0 rb BillSundrys' lg={2}>
                        <Row className='g-0 items-header'>
                            <Col className='g-0 rb item-id'> ID</Col>
                            <Col className='g-0 rb billSundryName'>billSundryName</Col>
                            <Col className='g-0 rb amount'>amount</Col>
                        </Row>
                    </Col>
                    <Col className='g-0 rb TotalAmount' lg={1}>TotalAmount</Col>
                </Row>
                {invoiceItems.map((invoice) => (
                    <Row className='g-0 invoiceList'>

                        <Col className='g-0 rb id d-flex justify-content-center' lg={1}><Link to={{ pathname: "/updateInvoice" }}>{invoice.id}</Link></Col>
                        <Col className='g-0 rb date' lg={1}>{invoice.date}</Col>
                        <Col className='g-0 rb InvoiceNumber' lg={1}>{invoice.InvoiceNumber}</Col>
                        <Col className='g-0 rb CustomerName' lg={1}>{invoice.CustomerName}</Col>
                        <Col className='g-0 rb BillingAddress' lg={1}>{invoice.BillingAddress}</Col>
                        <Col className='g-0 rb ShippingAddress' lg={1}>{invoice.ShippingAddress}</Col>
                        <Col className='g-0 rb GSTIN' lg={1}>{invoice.GSTIN}</Col>
                        <Col className='g-0 rb Items' lg={2}>
                            {invoice.Items.map((item) => (
                                <Row className='g-0 invoiceList'>
                                    <Col className='g-0 rb item-id' lg={2}>{item.id}</Col>
                                    <Col className='g-0 rb itemName' lg={2}>{item.itemName}</Col>
                                    <Col className='g-0 rb quantity' lg={2}>{item.quantity}</Col>
                                    <Col className='g-0 rb Price' lg={2}>{item.price}</Col>
                                    <Col className='g-0 rb amount' lg={2}>{item.price * item.quantity}</Col>


                                </Row>
                            ))}
                        </Col>
                        <Col className='g-0 rb BillSundrys' lg={2}>
                            {invoice.BillSundrys.map((item) => (
                                <Row className='g-0 invoiceList'>

                                    <>
                                        <Col className='g-0 sundryId'>{item.Id}</Col>
                                        <Col className='g-0 billSundryName'>{item.billSundryName}</Col>
                                        <Col className='g-0 amount'>{item.amount}</Col>
                                    </>

                                </Row>
                            ))}
                        </Col>
                        <Col className='g-0 TotalAmount' lg={1}>TotalAmount</Col>

                    </Row>
                ))}
            </Row>

           
            <Pagination className='g-0 pagination'>
                <Pagination.First />
                <Pagination.Prev />

                <Pagination className='g-0 pagination'>{items}</Pagination>

                <Pagination.Next />
                <Pagination.Last />
            </Pagination>

        </Row>
    )
}

export default InvoiceList