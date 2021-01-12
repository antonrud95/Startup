import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

const Video = ({info}) => {
    return(
        <div className="container max-w-1146 mx-auto px-4 py-42 lg:py-100">
            <div className="text-center">
                <Fade bottom>
                    <h2 className="text-48-60 mb-sm lg:max-w-650 lg:mx-auto">{info.title}</h2>
                </Fade>
                <Fade bottom delay={300}>
                    <p className="text-16-33 lg:max-w-580 lg:mx-auto">{info.text}</p>
                </Fade>
                <Fade bottom delay={400}>
                    <Link href="/">
                        <a className="flex items-center text-center max-w-135 mx-auto mb-sm md:mb-xl">
                            <p className="mr-xxs text-purple text-16-33 font-bold capitalize">{info.link}</p>
                            <FontAwesomeIcon icon={faChevronRight} size="xs" className="text-purple"/>
                        </a>
                    </Link>
                </Fade>
            </div>
            <Fade bottom delay={500}>
                <div>
                    <img src={info.image.url}/>
                </div>
            </Fade>
        </div>
    )
}
export default Video