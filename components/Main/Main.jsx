import s from './Main.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'
import IMG from './IMG/IMG';
export default function Main() {
    const links = [ { 
        name : 'выйти из стресса',
        link : '/'
    },
    { 
        name : 'хаос',
        link : '/chaos'
    },
    { 
        name : 'практикум',
        link : '/practic'
    },
    
    { 
        name : 'результаты',
        link : '/practic#results'
    },
    { 
        name : 'программа практикума',
        link : '/program'
    },
    { 
        name : 'эксперт',
        link : '/practic#expert'
    },
    { 
        name : 'маг дыхания',
        link : '/practic#mage'
    },
    { 
        name : 'рассрочка',
        link : '/practic#installment'
    },
    { 
        name : 'отзывы',
        link : '/practic#reviews'
    },
    { 
        name : 'faq',
        link : '/practic#faq'
    },]
    const {pathname } = useRouter()
    return(

        <div className={s.container}>
            <IMG className={s.girl} src={'/img/girl.svg'}/>
            
                <header>
                    {links.map((i,idx) => (
                        <Link  href={i.link} key={i.name}>
                            <a className={pathname === i.link ? s.activeLink : s.link}>
                                {i.name}
                            </a>
                        </Link>
                    ))}
                    <div className={s.social}>
                            <a target='_blank' rel="noreferrer" href="https://t.me/energybreathing">
                            <IMG src={'/img/icons/orangeTelegram.svg'} alt={'telegram'}/>
                            </a>
                            <IMG src={'/img/icons/orangeVK.svg'} alt={'vk'}/>
                            <IMG src={'/img/icons/orangeInst.svg'} alt={'instagram'}/>
                    </div>
                </header>
                <div className={s.about}>
                    <IMG className={s.angel} src={'/img/icons/angel.svg'} alt={'fdfsdf'}/>
                    <h1>СТРЕСС ВЫСАСЫВАЕТ ИЗ ВАС ЭНЕРГИЮ</h1>
                    <p>У Вас слабость в теле. Вы испытываете страх, тревогу или злость. <br/> Постоянно откладываете важные дела.<br/> 
                    Не можете делать нужные действия.</p>
                    <h2>Решение настолько простое,
                    что сложно <br /> поверить
                    </h2>
                    <Link href={'/practic'}>выйти из стресса</Link>
                </div>
        </div>
    )
}