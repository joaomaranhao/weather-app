import React, { useEffect, useRef, useState } from 'react'

import './MenuIcon.css'
import { FaSearch } from 'react-icons/fa'

function MenuIcon ({ fetchApi, apiCallError }) {
  const [open, setOpen] = useState('')
  const [hidden, setHidden] = useState('hidden')
  const [input, setInput] = useState('')
  const toggleOpen = () => {
    open === '' ? setOpen('open') : setOpen('')
    hidden === '' ? setHidden('hidden') : setHidden('')
    setInput('')
  }
  const inputRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetchApi(input)
    setInput('')
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [hidden])

  useEffect(() => {

  }, [apiCallError])

  return (
    <div className='menu'>
      <div className={`menu__search ${hidden}`}>
        <form onSubmit={handleSubmit}>
          <div className='menu__searchInput'>
            <FaSearch className='menu__searchIcon' />
            <input type='text' value={input} placeholder='Buscar cidade' ref={inputRef} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' />
          </div>
        </form>

        {apiCallError === 1 ? <div className='menu__notFound'><h4>Cidade não encontrada, tente de novo!</h4></div> : null}

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
