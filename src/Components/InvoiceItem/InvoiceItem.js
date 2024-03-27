import React from 'react'
import { Row, Col } from 'react-bootstrap';



const InvoiceItem = () => {
    const invoiceItems = [
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
    ]
    return (
        <Row className='g-0 list-container'>
            <Row className='g-0 heading'>
                Invoice Item
            </Row>
            <Row className='invoice-table g-0'>
                <Row className='g-0 tableHeading'>
                    <Col className='g-0 id'>ID</Col>
                    <Col className='g-0 itemName'>Item Name</Col>
                    <Col className='g-0 quantity'>Quantity</Col>
                    <Col className='g-0 Price'>Price</Col>
                    <Col className='g-0 amount'>Amount</Col>
                </Row>
                {invoiceItems.map((item) => (
                    <Row className='g-0 invoiceList'>

                        <>
                            <Col className='g-0 sno'>{item.id}</Col>
                            <Col className='g-0 itemName'>{item.itemName}</Col>
                            <Col className='g-0 quantity'>{item.quantity}</Col>
                            <Col className='g-0 Price'>{item.price}</Col>
                            <Col className='g-0 amount'>{item.price * item.quantity}</Col>
                        </>

                    </Row>
                ))}
        </Row>

        </Row>
    )
}

export default InvoiceItem