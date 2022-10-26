import s from "./Result.module.scss"
import IMG from "../../Main/IMG/IMG";
import resultImg from "../../../public/img/resultImg.png"

const Result = () => {
    return (
        <section className={s.result}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.subTitle}>
                        / результаты
                    </div>
                    <div className={s.title}>
                        Наполните энергией свою жизнь
                        на практикуме <span>Маг Дыхания!</span>
                    </div>
                    <div className={s.resultContent}>
                        <div className={s.resultContentImg}>
                            <IMG src={resultImg} className={s.img}/>
                        </div>
                        <div className={s.resultContentInfo}>
                            <div className={s.resultContentTitle}>
                                Как изменится ваша жизнь
                                после регулярной практики?
                            </div>
                            <ul>
                                <li>
                                    Вы обретете внутреннее спокойствие, сфокусируетесь на том, что действительно
                                    важно, и будете действовать продуктивно, даже если вокруг хаос
                                </li>
                                <li>
                                    Вы увидите новые финансовые возможности, которые скрыты от большинства людей
                                </li>
                                <li>
                                    Вы начнете смело строить планы, ставить реалистичные цели и с удовольствием
                                    достигать их
                                </li>
                                <li>
                                    Решатся внутренние конфликты, уйдут претензии к окружающим людям (родители,
                                    коллеги), наладятся отношения со второй половиной
                                </li>
                                <li>
                                    Уйдет перманентное психическое напряжение, вы станете более собранным,
                                    эффективным и результативным
                                </li>
                                <li>
                                    У вас высвободится огромное количество жизненной силы для активной работы
                                    и творческих задач
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.btnWrap}>
                        <a href={"#"} className={s.enjoyBtn}>
                            Записаться на курс
                        </a>
                        <a href={"#"} className={s.practicBtn}>
                            Программа практикума...
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;