import Button from './button'
import Fade from 'react-reveal/Fade';

const Hire = ({text, btn, image, lightup, lightdown}) => {
    return(
        <Fade bottom>
            <div className='container mx-auto px-4 relative md:-mt-20'>
                <div className='md:flex md:items-center md:justify-between py-30 px-20 md:px-70 bg-purple rounded-5px'>
                    <h2 className='mb-xs md:mb-0 text-center md:text-left text-36-55 text-white tracking-title 2xl:max-w-521'>{text}</h2>
                    <div className='lg:mx-sm xl:mr-100'>
                        <img src={image.url} className='hidden lg:block'/>
                    </div>
                    <div className='py-42'>
                        <div className='relative'>
                            <Button
                                link={btn.link}
                                type={btn.type}
                                additionalClassName={'uppercase text-purple bg-white px-42 py-20 text-17px w-full md:w-260 max-h-60'}
                            >
                                {btn.name}
                            </Button>
                            <div className='absolute -top-2/3 left-1/2 transform -translate-x-2/4'>
                                <img src={lightup.url}  />
                            </div>
                            <div className='absolute -bottom-2/3 left-1/2 transform -translate-x-2/4'>
                                <img src={lightdown.url}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
export default Hire 