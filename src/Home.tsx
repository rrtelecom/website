import About from './components/About'
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import Clients from './components/Clients';

function Home() {

    const images = [
        'https://5.imimg.com/data5/SELLER/Default/2023/12/365002513/RV/DT/HZ/18199724/hikvision-5mp-outdoor-dual-light-audio-mic-motion-alert-wired-cctv-camera-250x250.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/12/365013090/DM/HB/ON/18199724/beetel-newly-launched-m25-ultra-compact-caller-id-slim-line-landline-250x250.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/12/366439247/KZ/CF/BA/18199724/nec-sl-2100-kts-system-250x250.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/12/366438980/MD/MF/ME/18199724/telephone-installation-services-250x250.png',
    ];
    return (
        <div>
            <Carousel images={images} />
            <Clients />
            <About />
            <Categories />
        </div>
    )
}

export default Home