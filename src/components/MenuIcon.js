import React, { useState } from 'react'

import './MenuIcon.css'
import { FaSearch } from 'react-icons/fa'

function MenuIcon ({ fetchApi }) {
  const [open, setOpen] = useState('')
  const [hidden, setHidden] = useState('hidden')
  const [input, setInput] = useState('')
  const toggleOpen = () => {
    open === '' ? setOpen('open') : setOpen('')
    hidden === '' ? setHidden('hidden') : setHidden('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetchApi(input)
    setInput('')
    toggleOpen()
  }

  return (
    <div className='menu'>
      <div className={`menu__search ${hidden}`}>
        <form onSubmit={handleSubmit}>
          <div className='menu__searchInput'>
            <FaSearch className='menu__searchIcon' />
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' />
          </div>
        </form>
      </div>
      <div id='nav-icon' className={open} onClick={toggleOpen}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default MenuIcon
