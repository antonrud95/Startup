const FeatureItems = ({image, title, text}) => {
    return(
        <div className="mb-xs md:mb-0 md:w-1/2 lg:w-1/4">
            <img src={image} className="w-110 mx-auto mb-xs"/>
            <h4 className="text-16-26 font-bold mb-xs">{title}</h4>
            <p className="text-15-28 md:max-w-265 mx-auto">{text}</p>
        </div>
    )
}
export default FeatureItems