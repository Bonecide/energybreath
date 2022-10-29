import s from './FAQ.module.scss'
import  Slick  from 'react-slick';
import item from '../../fake-data/faq.json'
export default function FAQ({setIsOpen}) {
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots : true
        
      };
    return(
        <div id='faq' className={s.container}>
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
            <h1> Часто задаваемые вопросы</h1>
            <div className={s.sliderContainer}>
            <Slick customPaging={(i)=><div className={s.dotsPag}><div className={'activate'}/></div>} dotsClass={'slick-dots'}  {...settings} className={s.Slider}>
                {item.map((info,idx) => (
                <div className={s.slide} key= {`SlideFAQN${idx}`}>
                    <h3>{info.title}</h3>
                    <p>{info.body}</p>
                </div>
            ))}
                </Slick>
            </div>
            <div className={s.end}>
                <h3>Запишитесь на онлайн-практикум <span>Маг Дыхания</span> — начните <br /> ясно мыслить, быть в ресурсном состоянии и достигать <br /> смелых целей в любые времена.</h3>
                <h4>Старт в любое время! Все практики в записи.</h4>
                <button onClick ={() => setIsOpen(true)}>Записаться на курс</button>
            </div>
        </div>
    )
}