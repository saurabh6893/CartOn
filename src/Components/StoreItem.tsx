import React from 'react'
import { Button, Card } from 'react-bootstrap'

type storeProps = {
  name: string
  price: number
  so: number
  category: string
  imgx: string
}

const StoreItem = ({ name, price, so, category, imgx }: storeProps) => {
  const quantity: number = 1
  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgx}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-3'>{name} </span>
          <span className='ms-2 fs-3 text-muted'>{price} ₹</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button>Add to Cart</Button>
          ) : (
            <div
              className='d-flex aligns-items-center flex-column'
              style={{ gap: '0.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '0.5rem' }}
              >
                <Button>-</Button>
                <div>
                  <span className='fs-3'>{quantity} in your cart</span>
                </div>
                <Button>+</Button>
              </div>
              <Button variant='danger' size='sm'>
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem
