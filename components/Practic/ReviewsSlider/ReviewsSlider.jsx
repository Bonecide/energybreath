import s from './ReviewsSlide.module.scss'
 import reviews from '../../../fake-data/reviews.json'
 import Slick from "react-slick";
import IMG from '../../Main/IMG/IMG';
export default function ReviewsSlider() {
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots : true
        
      };
    return (
        <div id='reviews' className={s.container}>
             <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
            <div className={s.SlideContainer}>
            <Slick customPaging={(i)=><div className={'dots-pag'}><div className={'activate'}/></div>} dotsClass={'slick-dots'}  {...settings} className={s.Slider}>
                {reviews.map((info,idx) => (
                <div className={s.slide} key= {`SlideN${idx}`}>
                        <IMG src={info.img} alt="vxfd" />
                </div>
            ))}
                </Slick>
            </div>
        </div>
    )
}