import InfoSection from './info-section'

const Advantage = ({ info }) => {
    return (
        <InfoSection 
            isReversed
            delayFirst={200}
            delaySecond={300}
            delayThird={500}
            delayFourth={750}
            title={info.title}
            text={info.text}
            image={info.image.url}
            infoitems={info.infoitems}
            link={info.link}
        />
    );
}
  
export default Advantage;