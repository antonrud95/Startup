import InfoSection from './info-section'

const Support = ({ info }) => {
    return (
        <InfoSection 
            delayFirst={0}
            delaySecond={200}
            delayThird={300}
            delayFourth={500}
            title={info.title}
            text={info.text}
            image={info.image.url}
            link={info.link}
        />
    );
}
  
export default Support;