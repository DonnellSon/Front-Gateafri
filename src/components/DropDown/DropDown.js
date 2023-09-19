import React, { useRef, useEffect } from 'react'
import './DropDown.css'
import { createPopper } from '@popperjs/core';
import useClickOutside from '../../Hooks/useClickOutside'
const DropDown = ({ children, placement = 'bottom-end',activeClassName='selected',className=null }) => {
  const dropdownMenu = useRef()
  const dropdownToggler = useRef()
  const dropDown = useRef()
  let popperInstance = useRef(null)
  useClickOutside(dropDown, () => {
    hide()
  })
  let list = null
  let i = -1
  let active = null
  const handleMouseEnter = (e) => {
    i = e.target.getAttribute('data-index')
    active?.classList.remove('active')
    e.target.classList.add('active')
    active = e.target
  }
  const handleMouseLeave = (e) => {
    active?.classList.remove('active')
  }
  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      active?.click()
    }
  }
  const handleKeyup = (e) => {
    handleEnterKey(e)
    if (list) {
      active?.classList.remove('active')
      if (e.keyCode === 40) {
        i++
        if (i > list?.length - 1) i = 0

      } else if (e.keyCode === 38) {
        i--
        if (i < 0) i = list?.length - 1
      }
      list[i]?.classList.add('active');
      active = list[i]
    }

  }
  const handleKeyDown = (e) => {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
  }
  useEffect(() => {
    popperInstance.current = createPopper(dropdownToggler.current, dropdownMenu.current, {
      placement,

    });
  }, [])
  function show() {
    window.addEventListener("keydown",handleKeyDown)
    dropdownMenu.current.setAttribute('data-show', '');
    dropdownToggler.current.classList.add('selected');
    popperInstance?.current.update();
    window.addEventListener('keyup', handleKeyup)
    list = dropdownMenu.current.querySelectorAll('ul li a')
    list?.forEach((a, index) => {
      a.setAttribute('data-index', index)
      a.addEventListener('mouseenter', handleMouseEnter)
      a.addEventListener('mouseleave', handleMouseLeave)
    })
  }
  function toggle() {
    if (dropdownMenu.current.hasAttribute('data-show')) {
      hide()
    } else {
      show()
    }
  }

  function hide() {
    dropdownMenu.current.removeAttribute('data-show');
    dropdownToggler.current.classList.remove('selected');
    window.removeEventListener('keyup', handleKeyup)
    list?.forEach((a, i) => {
      a.removeEventListener('mouseenter', handleMouseEnter)
      a.removeEventListener('mouseleave', handleMouseLeave)
    })
    list = null
    i = -1
    active?.classList.remove('active')
    active = null
    window.removeEventListener("keydown",handleKeyDown)
  }
  return (
    <div className={`dropDown relative${className!==null ? ' '+className : ''}`} ref={dropDown}>
      <div ref={dropdownToggler} onClick={toggle}>
        {
          children[0]
        }
      </div>
      <div className='dropdownMenu' onClick={hide} ref={dropdownMenu} style={{
        borderRadius: 5,
        fontSize: 13,
      }}>
        {
          children[1]
        }
      </div>
    </div>
  )
}

export default DropDown