import React from 'react'
import { Col, Row } from 'react-bootstrap'
import data from '../Data/items.json'
import StoreItem from '../Components/StoreItem'
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={2} className='g-3'>
        {data.map((i) => (
          <Col key={i.so}>
            <StoreItem {...i} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
