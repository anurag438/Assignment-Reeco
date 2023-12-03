import React from 'react'
import SearchContainer from './SearchContainer'
import OrdersList from './OrdersList'

const MainContainer = () => {
  return (
    <div className='main-container'>
      <SearchContainer/>
      <OrdersList/>
    </div>
  )
}

export default MainContainer
