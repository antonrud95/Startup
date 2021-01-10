import { useState } from 'react'
import Link from "next/link";
import Logo from '../components/logo'
import Button from '../components/button'
import MobileMenu from '../components/mobile-menu'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Fade from 'react-reveal/Fade';
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({ links, button }) => {
  const [isMenuShown, toggleMenu] = useState(false)
  const [isOnTop, setOnTop] = useState(true)
  const openClickHandler = () => {
    toggleMenu(true)
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    },
    [isOnTop]
  )
    const navStyles = 'container mx-auto px-4 fixed right-0 left-0 top-0 py-25 z-1000 transition duration-500 ease-in-out'
    return ( 
      <header className={isOnTop ? navStyles : classnames(navStyles, 'bg-white')}>
        <div className='flex items-center justify-between '>
          <Fade top>
            <Logo />
          </Fade>
          <MobileMenu items={links} buttons={button} isShown={isMenuShown} toggle={toggleMenu}/>
          <FontAwesomeIcon icon={faBars} onClick={openClickHandler} className={'block lg:hidden'}/>
          <Fade top delay={300}>
            <nav className='hidden lg:flex items-center'>
                {links.map((link, index) => {
                  return(
                    <Link href="/" key={Math.random()}>
                            <a className='transition duration-500 ease-in-out text-16-33 text-main hover:text-purple mr-xl'>
                                {link}
                            </a>
                        </Link>
                    )
                })}
            </nav>
          </Fade>
          <Fade top delay={400}>
          <div className='hidden lg:flex'>
              {button.map((btn) => {
                  return(
                      <Button 
                      type={btn.type}
                      additionalClassName={'text-16px text-purple py-13 px-25 tracking-button capitalize border-2 border-purple'}
                      key={Math.random()}
                      link={btn.link}
                      >
                        {btn.name}
                      </Button>
                  )
              })}
          </div>
          </Fade>
        </div>
      </header>
    );
  }
  
  export default Header;