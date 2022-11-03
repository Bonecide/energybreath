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
                            <a target='_blank' rel="noreferrer" href="https://t.me/energybreathing">
                            <IMG src={'/img/icons/orangeTelegram.svg'} alt={'telegram'}/>
                            </a>
                            <IMG src={'/img/icons/orangeVK.svg'} alt={'vk'}/>
                            <IMG src={'/img/icons/orangeInst.svg'} alt={'instagram'}/>
                    </div>
        </header>
    )
}