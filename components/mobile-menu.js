import {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import Link from "next/link";

import Logo from '../components/logo'
import Button from '../components/button'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ isShown, toggle, items, buttons }) => {
  const menuRef = useRef(null)
  useEffect(() => {
    isShown ? disableBodyScroll(menuRef.current) : clearAllBodyScrollLocks()
  }, [isShown])
  const closeClickHandler = (e) => {
    e.preventDefault()
    enableBodyScroll(menuRef.current)
    clearAllBodyScrollLocks()
    toggle(false)
  }
  return (
    <div className={isShown ? 'block' : 'hidden'} ref={menuRef}>
      <div className={'fixed right-0 left-0 top-0 bottom-0 bg-white'}>
        <div className='flex items-center py-25 px-4 justify-between'>
          <Logo />
          <FontAwesomeIcon icon={faTimes} onClick={closeClickHandler}/>
        </div>
        <nav className={'flex flex-col items-center'}>
            {items.map((item) => {
                return(
                    <Link href="/" key={Math.random()} >
                        <a className='transition duration-500 ease-in-out text-16-33 text-main hover:text-purple mb-xl'>
                            {item}
                        </a>
                    </Link>
                )
            })}
        </nav>
        <div className='flex justify-center'>
            {buttons.map((button, index) => {
                return(
                    <div key={button.id} >
                        <Button 
                        type={button.type}
                        additionalClassName={'text-16px text-purple py-13 px-25 tracking-button capitalize border-2 border-purple'}
                        link={button.link}
                      >
                        {button.name}
                      </Button>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isShown: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  items: PropTypes.node.isRequired,
  buttons: PropTypes.array.isRequired,
}

export default MobileMenu
