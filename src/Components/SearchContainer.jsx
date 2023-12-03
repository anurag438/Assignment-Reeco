import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPrint } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = () => {
  return (
    <div className='search-main-container'>
      <div className='searchbar-container'>
        <input placeholder='Search...'/><FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className='search-bar-btns'>
        <button>Add Item</button>
          <FontAwesomeIcon className='print-icon' icon={faPrint}/>
      </div>
    </div>
  )
}

export default SearchContainer
