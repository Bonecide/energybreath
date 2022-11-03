import { useEffect, useState } from 'react'
import s from './Variants.module.scss'
import useScript from './../../useScript';
import BuyModal from '../../../module/BuyModal/BuyModal';
export default function Variants() {


    const [isOpen,setIsOpen]=useState(false)
    const [url,setUrl] = useState()
    const order = (url) => {
        setIsOpen(true)
        setUrl(url)
    }
    return(
        <div id='mage' className={s.container}>
            <div className={s.Card}>
                <h2>Варианты участия</h2>
                <div className={s.wrapper}>
                    <div className={s.relative}>
                            <div style={{'backgroundImage' : `url(${'/img/adept.png'})`}} className={s.img}>

                            </div>
                            <button onClick = {() => order('https://school.energybreathing.ru/pl/lite/widget/widget?&id=762924')}>
                                заказать
                            </button>
                    </div>
                    <div className={s.about}>
                            <p>Пакет “9 модулей”</p>
                            <div className={s.price}>
                                <h3>Адепт</h3>
                                <p className={s.oldPrice}>60 000 р.</p>
                                <p>32 900 р.</p>
                            </div>
                            <ul>
                                <li>
                                Проверка домашних заданий + обратная связь от кураторов-экспертов
                                </li>
                                <li>Проверка домашних заданий + обратная связь от кураторов-экспертов
                                
                                </li>
                                <li>
                                Нетворкинг в телеграмм с кураторами экспертами
                                 </li>   
                                <li>
                                Доступ к материалам курса на 6 месяцев
                                </li>
                                <li>
                                Вебинар вопрос\ответ 1 раз в неделю 
                                </li>
                                <li>
                                Бонус. Дополнительная практика «Освобождение от влияния прошлых отношений связей»
                                </li>
                                <li>
                                Бонус. Эксклюзивная 20-минутная практика в аудиоформате для ежедневного включения ресурсных состояний (перед переговорами, быстрое восстановление после жесткой психологической атаки, мгновенное снятие усталости)
                                </li>
                                <li>
                                Бонус. “7 техник на каждую сферу” (чакру) в аудио формате энергодыхания для самостоятельной работы и усиления всех практик
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className={s.Card}>
                <div className={s.wrapper}>
                 
                    <div className={s.about}>
                            <p>Все, что входит в пакет “Адепт”</p>
                            <div className={s.price}>
                                <h3>Магистр</h3>
                                <p className={s.oldPrice}>90 000 р.</p>
                                <p>57 900 р.</p>
                            </div>
                            <ul>
                                <li>
                                Проверка домашних заданий от кураторов и  обратная связь от Романа
                                </li>
                                <li>Доступ к материалам курса на 9 месяцев
                                </li>
                                <li>
                                Отдельный чат с Романом
                                </li>
                                <li>
                                Книга “Маг дыхания” с автографом Романа + аудиоформат книги
                                </li>
                                <li>
                                Персональные дыхательные практики с экспертом 1 раз в неделю 
                                </li>
                                <li>
                                Бонус . “14 техник на каждую сферу” (чакру) в аудио формате энергодыхания для самостоятельной работы и усиления всех практик
                                </li>
                                <li>
                                Бонус .  Мощная практика холотропного дыхания для освобождения от психологических травм прошлого. Аудиоформат сеанса на  68 минут.
                                </li>
                                <li>
                                Бонус : Онлайн - консультация по  Дизайну Человека от Ольги Карловской
                                </li>
                            </ul>
                    </div>
                    <div className={s.relative}>
                            <div style={{'backgroundImage' : `url(${'/img/magistr.png'})`}} className={s.img}>

                            </div>
                            <button onClick = {() => order('https://school.energybreathing.ru/pl/lite/widget/widget?&id=762930')}>
                                заказать
                            </button>
                    </div>
                    
                </div>
            </div>
            <div className={s.Card}>
                <div className={s.wrapper}>
                    <div className={s.relative}>
                            <div style={{'backgroundImage' : `url(${'/img/Oracle.png'})`}} className={s.img}>

                            </div>
                            <button onClick = {() => order('https://school.energybreathing.ru/pl/lite/widget/widget?&id=762932')}>
                                заказать
                            </button>
                    </div>
                    <div className={s.about}>
                            <p>Все, что входит в пакет Магистр</p>
                            <div className={s.price}>
                                <h3>Оракул</h3>
                                <p className={s.oldPrice}>250 000 р.</p>
                                <p>135 000 р.</p>
                            </div>
                            <ul>
                                <li>
                                5 личных встреч, на которых Роман создаст индивидуальные сеансы Энергодыхания конкретно под вас для включения ресурсных состояний, которые вы можете использовать всегда.
                                </li>
                                <li>
                                10 уникальных авторских сеансов отдельно записанных под вас и ваши задачи от Романа.
                                </li>
                                <li>
                                Разбор любых вопросов в рамках встреч, возможность быть на связи с Романом по потребности.
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            {isOpen && <BuyModal url={url} close={setIsOpen}/>}
        </div>
    )
}