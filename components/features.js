import FeatureItems from '../components/feature-items'
import Fade from 'react-reveal/Fade';

const Feature = ({ title, text, featureitems }) => {
    return (
      <div className="container max-w-1232 mx-auto px-4 py-25 md:py-60">
        <div className="text-center">
          <Fade bottom>
            <h3 className="text-18px text-purple">
              {title}
            </h3>
          </Fade>
          <Fade bottom delay={300}>
            <p className="text-30-55 text-black">{text}</p>
          </Fade>
        </div>
        <Fade bottom delay={400}>
          <div className="text-center mt-sm lg:mt-xxl flex flex-wrap">
            {featureitems.map((item) => (
              <FeatureItems
                key={item.id} 
                image={item.image.url}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </Fade>
      </div>
    );
  }
  
  export default Feature;