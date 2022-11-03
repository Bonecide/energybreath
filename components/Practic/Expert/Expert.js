import s from "./Expert.module.scss"

const Expert = () => {
    return (
        <section id="expert" className={s.expert}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.subTitle}>
                        / эксперт
                    </div>
                    <div className={s.title}>
                        Ведущий практикума: <span>Роман Карловский</span>
                    </div>
                    <div className={s.secondTitle}>
                        Основатель международного Центра Энергодыхания – 37 филиалов центра по всему миру.
                    </div>
                </div>
            </div>

            <div className={s.expertContent}>
                <div className={s.expertContentInfo}>
                    <ul>
                        <li>
                            Практикует дыхательные практики более 15 лет.
                        </li>
                        <li>
                            Обучил Энергодыханию профессиональных спортсменов, психологов, врачей,
                            тренеров боевых искусств и предпринимателей
                        </li>
                        <li>
                            Разработал программу по Энергодыханию для сотрудников ряда корпораций:
                            Газпромнефть, Ростелеком, Х5 Ритейл групп
                        </li>
                        <li>
                            В 2016 году проходил обучение в международной школе йоги
                            «Om Shanti Om Yoga School» (Ришикеш)
                        </li>
                        <li>
                            Сотрудничает с Институтом им. Бехтерова г. Москва. Совместные исследования в
                            области энерго дыхания: влияние на организм и применение в социальной жизни.
                        </li>
                    </ul>
                </div>
                <a href={"#mage"} className={s.btn}>
                    Отправить сообщение
                </a>
            </div>
        </section>
    );
};

export default Expert;