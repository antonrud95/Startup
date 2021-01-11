import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import Fade from 'react-reveal/Fade';

const Tutorial = ({uppertitle, title, featureitems}) => {
    return(
        <div className="bg-tutorials pt-25 md:pt-60 pb-270 mt-xl lg:mt-160">
            <div className="container mx-auto px-4">
                <div className="text-center mb-xs lg:mb-xl">
                    <Fade bottom>
                        <h4 className="text-18px text-purple capitalize">{uppertitle}</h4>
                    </Fade>
                    <Fade bottom delay={300}>
                        <h3 className="text-30-55 tracking-title">{title}</h3>
                    </Fade>
                </div>
                <Fade bottom delay={400}>
                    <div className="flex flex-wrap justify-center lg:justify-between">
                        {featureitems.map((item) => (
                            <div key={item.id} className="lg:w-32% 2xl:w-1/3 max-w-410 shadow-input mb-xs lg:mb-0 transform hover:scale-105 transition duration-300 ease-in-out">
                                <div className="max-w-410 max-h-230 ">
                                    <img src={item.image.url} className="w-full h-full"/>
                                </div>
                                <h4 className="text-20-30 max-w-410 p-25">{item.text}</h4>
                                <div className="flex items-center pl-25 pb-35">
                                    <FontAwesomeIcon icon={faCommentDots} className="mr-xxs text-grey text-opacity-60"/>
                                    <h5 className="text-16px text-grey">{item.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Tutorial