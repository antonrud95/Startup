import Button from '../components/button'
import Fade from 'react-reveal/Fade';

const Hero = ({ title, text, buttons, inputfield, sponsored, image }) => {
    return (
      <div className="bg-hero py-110 lg:py-150 xl:py-200">
        <div className="container max-w-1410 mx-auto px-4 flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <Fade top>
                <h1 className="text-30-42 text-main mb-xs lg:max-w-3/4 xl:max-w-580">
                  {title}
                </h1>
              </Fade>
              <Fade top delay={300}>
                <h2 className="text-16-26 text-main mb-xs lg:mb-sm lg:max-w-3/4">{text}</h2>
              </Fade>
              <Fade top delay={400}>
                <div className="mb-sm md:mb-xxl">
                  <form className="flex justify-between md:h-xl max-w-580">
                    <input type={inputfield.type} placeholder={inputfield.placeholder} className="text-16-26 md:min-h-full px-13 md:px-25 w-full shadow-input rounded-8px"/>
                    <Button 
                      type={buttons[0].type}
                      additionalClassName={'text-20px text-white bg-purple py-8 px-13 lg:px-42 tracking-button  md:min-h-full md:ml-xxs'}
                      key={buttons[0].id}
                      link={buttons[0].link}
                      >
                        {buttons[0].name}
                    </Button>
                  </form>
                </div>
              </Fade>
              <Fade top delay={500}>
                <div className='flex flex-col md:flex-row mb-xs'>
                  <p className='text-grey mb-xs md:mb-0 md:mr-xs'>Sponsored</p>
                  {sponsored.map((sponsor) => (
                    <img src={sponsor.url} key={sponsor.id} className='max-w-100 h-md mr-xs mb-xxs md:mb-0'/>
                  ))}
                </div>
              </Fade>
          </div>
          <div className='md:w-1/2'>
            <Fade top delay={600}>
                <div>
                    <img src={image.url}/>
                </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;