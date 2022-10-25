import s from './Header.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router';
import IMG from './../../components/Main/IMG/IMG';

export default function Header() {
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
        link : '#results'
    },
    { 
        name : 'программа практикума',
        link : '/program'
    },
    { 
        name : 'эксперт',
        link : '#expert'
    },
    { 
        name : 'маг дыхания',
        link : '#mage'
    },
    { 
        name : 'рассрочка',
        link : '#installment'
    },
    { 
        name : 'отзывы',
        link : '#reviews'
    },
    { 
        name : 'faq',
        link : '#faq'
    },]
    const {pathname } = useRouter()
    return (
        <header className={s.header}>
             {links.map((i,idx) => (
                        <Link  href={i.link} key={i.name}>
                            <a className={pathname === i.link ? s.activeLink : s.link}>
                                {i.name}
                            </a>
                        </Link>
                    ))}
                      <div className={s.social}>
                            <IMG src={'/img/icons/orangeTelegram.svg'} alt={'telegram'}/>
                            <IMG src={'/img/icons/orangeVK.svg'} alt={'vk'}/>
                            <IMG src={'/img/icons/orangeInst.svg'} alt={'instagram'}/>
                    </div>
        </header>
    )
}