import CarouselBody from './carousel'

const Slider = ({uppertitle, title, slideritems}) => {
    return(
        <div className='container mx-auto px-4 overflow-x-hidden py-200 pt-100 md:py-230 md:pt-70 lg:py-270 lg:pt-60'>
            <div className='text-center mb-sm md:mb-58'>
                <h4 className='text-purple text-18px'>{uppertitle}</h4>
                <h3 className='text-30-55'>{title}</h3>
            </div>
            <CarouselBody slideritems={slideritems}>
                {slideritems.map((item, index) => {
                    return(
                        <div className='text-center' key={item.id}>
                            <p className='text-center playfont text-36-65 max-w-822 mx-auto'>{item.text}</p>
                        </div>
                    )
                })}
            </CarouselBody>
        </div>
    )
}
export default Slider