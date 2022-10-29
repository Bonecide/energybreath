import s from './Bonus.module.scss'
import IMG from './../../Main/IMG/IMG';
import OrderModal from '../../../module/OrderModal/OrderModal';

export default function Bonus({setIsOpen}) {

    return(
        <div className={s.container}>
            <h2>БОНУСЫ</h2>
            <div className={s.bonus}>
                <IMG src={"/img/bonusBG.svg"} alt="" />
                <div className={s.info}>
                    <ol >
                        <li>
                        Практика «Освобождение от влияния прошлых отношений и связей»
                        </li>
                        <li>
                        Эксклюзивная 20-минутная практика для ежедневного включения ресурсных состояний (перед переговорами, быстрое восстановление, мгновенное снятие усталости)
                        </li>
                        <li>
                        7 техник энергодыхания на каждую сферу (чакру) для самостоятельной работы и усиления всех предыдущих практик
                        </li>
                        <li>
                        Мощная практика холотропного дыхания для освобождения от психологических травм прошлого. Аудиоформат сеанса на 68 минут.
                        </li>
                    </ol>
                    <button onClick = {() => setIsOpen(true)}>Записаться на курс</button>
                </div>
            </div>
        </div>
    )
}