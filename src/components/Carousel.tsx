import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
    images: string[];
}

function Carousel({ images }: CarouselProps) {

    var item = 3;

    if (window.screen.width < 768) {
        item = 1;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: item,
        slidesToScroll: item,
        arrows: false
    };

    return (
        <div className='mx-10  rounded-xl slider-container'>
            <Slider {...settings} className=''>
                {images.map((image, index) => (
                    <a href="#products">
                        <div className='flex bg-slate-200 relative justify-center items-center border border-gray-300 border-b-4 rounded-xl p-10' key={index}>
                            <img className='border rounded-xl object-cover w-96 h-60' src={image} alt={`Slide ${index + 1}`} />
                            <button className="absolute inset-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl" style={{ transition: 'opacity 0.3s' }}>View More</button>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel

