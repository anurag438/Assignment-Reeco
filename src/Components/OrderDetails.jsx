import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood,faCakeCandles,faSnowflake,faBox } from "@fortawesome/free-solid-svg-icons";
const OrderDetails = () => {
  return (
    <div className='order-details-container'>
      <div className='details-container'>
        <p className='title'>Supplier</p>
        <p className='description'>East coast fruits & vegetables</p>
      </div>
      <div className='details-container'>
        <p className='title'>Shipping Date</p>
        <p className='description'>Thu, Feb 10</p>
      </div>
      <div className='details-container'>
        <p className='title'>Total</p>
        <p className='description'>$15,028.3</p>
      </div>
      <div className='details-container'>
        <p className='title'>Category</p>
        <p className='description'>
          <FontAwesomeIcon icon={faBowlFood} />
          <FontAwesomeIcon icon={faCakeCandles} />
          <FontAwesomeIcon icon={faSnowflake} />
          <FontAwesomeIcon icon={faBox} />
        </p>
      </div>
      <div className='details-container'>
        <p className='title'>Status</p>
        <p className='description'>Awaiting your approval</p>
      </div>
    </div>
  )
}

export default OrderDetails
