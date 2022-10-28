import s from "./WhatWeFeel.module.scss"
import IMG from "../../Main/IMG/IMG";
import depressia from "../../../public/img/depressia.png"

const WhatWeFeel = () => {
    return (
        <div className={s.WhatWeFeel}>
            <div className={s.header}>
                <div className="container">
                    <h1 className={s.title}>ЧТО МЫ ЧУВСТВУЕМ, КОГДА ВОКРУГ ХАОС?</h1>
                    <div className={s.wordsWrap}>
                        <div className={s.word1}>
                            СТРАХ
                        </div>
                        <div className={s.word2}>
                            УНЫНИЕ
                        </div>
                        <div className={s.word3}>
                            АПАТИЮ
                        </div>
                        <div className={s.word4}>
                            СОСТОЯНИЕ ОПУСТОШЕНИЯ
                        </div>
                        <div className={s.word5}>
                            ТРЕВОГУ
                        </div>
                    </div>
                </div>
            </div>

            <div className={"container"}>
                <div className={s.mainInfo}>
                    <div className={s.img}>
                        <IMG src={depressia}/>
                    </div>
                    <div className={s.mainInfoText}>
                        <div className={s.mainInfoTitle}>
                            В ЭТОТ МОМЕНТ ВАША ЖИЗНЕННАЯ ЭНЕРГИЯ СЛИВАЕТСЯ БЕСКОНТРОЛЬНО
                        </div>
                        <ul>
                            <li>
                                Вместо важных задач листаем новостную ленту
                            </li>
                            <li>
                                Цели, которые ставили вчера, сегодня кажутся недостижимыми
                            </li>
                            <li>
                                Страшно строить планы, когда не знаешь, что будет завтра
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.text}>
                    В этот момент мир незаметно уходит из под ног.
                    Вы, сами того не замечая, лишаетесь опоры — энергии, которая раньше двигала вас вперед и
                    помогала ясно смотреть в будущее.
                    Включается “режим выживания”. Отсутствие энергии погружает в рутину,
                    вы застываете и забываете о глобальных целях.
                </div>
            </div>
        </div>
    );
};

export default WhatWeFeel;