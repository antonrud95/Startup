import Logo from '../components/logo'
import Link from "next/link";
import Fade from 'react-reveal/Fade';

const Footer = ({text, links}) => {
    return(
        <div className='container mx-auto px-4 md:flex items-center justify-between py-45'>
            <div className='lg:flex items-center mb-25 md:mb-0'>
                <Fade bottom>
                    <Logo />
                </Fade>
                <Fade bottom delay={300}>
                    <p className='text-14-18 text-black text-opacity-60'>{text}</p>
                </Fade>
            </div>
            <Fade bottom delay={400}>
                <div className='flex flex-col md:flex-row'>
                    {links.map((link, index) => (
                        <Link href="/" key={index} >
                            <a className='transition duration-500 ease-in-out hover:text-purple mb-xxs md:mb-0 md:ml-sm text-16-33 '>
                                {link}
                            </a>
                        </Link>
                    ))}
                </div>
            </Fade>
        </div>
    )
}
export default Footer