import Fade from 'react-reveal/Fade';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const InfoSection = ({isReversed, delayFirst, delaySecond, delayThird, delayFourth, delayFifth, title, text, image, infoitems, link}) => {
    return(
        <div className={isReversed ? 'container max-w-1232 mx-auto px-4 py-25 md:py-60 md:flex md:flex-wrap md:flex-row-reverse' : 'container max-w-1232 mx-auto px-4 py-25 md:py-60 md:flex md:flex-wrap md:flex-row'}>
            <div className={isReversed ? 'md:w-1/2 md:max-w-470 xl:pt-110 md:ml-auto' : 'md:w-1/2 xl:pt-110'}>
                <Fade bottom delay={delayFirst}>
                    <h2 className={isReversed ? "text-48-60 text-main mb-xs" : "text-48-60 text-main mb-xs md:max-w-580"}>{title}</h2>
                </Fade>
                <Fade bottom delay={delaySecond}>
                    <p className={isReversed ? "text-16-33 text-main text-opacity-60 mb-sm" : "text-16-33 text-main text-opacity-60 mb-sm md:max-w-500"}>{text}</p>
                </Fade>
                {infoitems && (
                    <Fade bottom delay={delayThird}>
                        <div className="mb-xs">
                            {infoitems.map((item) => (
                                <div key={item.id} className="flex items-center">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-grey text-opacity-40 mr-xxs"/>
                                    <p className="text-18-45 text-main">
                                        {item.text}
                                    </p>
                                </div>
                                
                            ))}
                        </div>
                    </Fade>
                )}
                <Fade bottom delay={delayFourth}>
                    <Link href="/">
                        <a className="flex items-center text-center max-w-135 mb-sm md:mb-xl">
                            <p className="mr-xxs text-purple text-16-33 font-bold capitalize">{link}</p>
                            <FontAwesomeIcon icon={faChevronRight} size="xs" className="text-purple"/>
                        </a>
                    </Link>
                </Fade>  
            </div>
            <div className="md:w-1/2">
                <Fade bottom delay={delayFifth}>
                    <div className={isReversed ? "max-w-633" : "max-w-633 ml-auto"}>
                        <img src={image} className="w-full"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default InfoSection