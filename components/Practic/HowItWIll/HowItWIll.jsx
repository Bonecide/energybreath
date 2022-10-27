import s from './HowItWIll.module.scss'

export default function HowItWIll() {

    return (
        <div className={s.container}>
            <h2>Как будет проходить обучение?</h2>
            <ul>
                <li>
                9 модулей по каждой сфере жизни
                </li>
                <li>
                Длительность курса — 2 месяца
                </li>
                <li>
                Одно занятие в неделю, длится 1,5 часа
                </li>
                <li>
                Домашние задания по 10 минут утром и вечером
                </li>
                <li>
                Дневник для отслеживания прогресса
                </li>
                <li>
                Эффект от занятий останется на всю жизнь
                </li>
            </ul>
        </div>
    )
}