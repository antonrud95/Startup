import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

const Advantage = ({ info }) => {
    return (
        <div className="container mx-auto px-4 py-25 md:py-60 md:flex md:flex-wrap md:flex-row-reverse">
            <div className="md:w-1/2 md:max-w-470 md:ml-auto xl:pt-110">
                <Fade bottom delay={200}>
                    <h2 className="text-48-60 text-main mb-xs">{info.title}</h2>
                </Fade>
                <Fade bottom delay={300}>
                    <p className="text-16-33 text-main text-opacity-60 mb-sm">{info.text}</p>
                </Fade>
                <Fade bottom delay={500}>
                    <div className="mb-xs">
                        {info.infoitems.map((item) => (
                            <div key={item.id} className="flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-grey text-opacity-40 mr-xxs"/>
                                <p className="text-18-45 text-main">
                                    {item.text}
                                </p>
                            </div>
                            
                        ))}
                    </div>
                </Fade>
            </div>
            <div className="md:w-1/2">
                <Fade bottom>
                    <div className="max-w-633">
                        <img src={info.image.url} className="w-full"/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
  
export default Advantage;