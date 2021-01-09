import Link from "next/link";
import LogoImage from '../assets/images/startuplogo.svg'

function Logo() {
    return (
      <div className='flex h-lg'>
        <Link href="/">
            <a>
                <LogoImage className='h-full'/>
            </a>
        </Link>
      </div>
    );
  }
  
  export default Logo;