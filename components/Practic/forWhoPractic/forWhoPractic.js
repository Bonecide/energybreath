import s from "./forWhoPractic.module.scss"

const ForWhoPractic = () => {
    return (
        <section className={s.forWhoPractic}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.title}>
                        Для кого практикум?
                    </div>

                    <div className={s.items}>
                        <div className={s.item}>
                            <div className={s.subTitle}>
                                Нет сил двигаться к цели
                            </div>
                            <div className={s.text}>
                                В теле слабость. В голове страх, тревога или злость.
                                Вы понимаете, что делать, чтобы получить результат… но
                                даже маленькие важные дела откладываете на потом.
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.subTitle}>
                                Нет доверия к миру и окружающим
                            </div>
                            <div className={s.text}>
                                Спокойствие и человеческое тепло сменились паникой и злорадством.
                                Трудности в отношениях появляются со всеми — и со второй половинкой,
                                и с коллегами по работе.
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.subTitle}>
                                Нет уверенности в финансовой стабильности
                            </div>
                            <div className={s.text}>
                                Перспективы тают на глазах, карьера и бизнес отходят на второй план.
                                Усиливается страх потерять накопленное. Любая работа кажется бесполезной.
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.subTitle}>
                                Ваше тело говорит вам “Нет!
                            </div>
                            <div className={s.text}>
                                Вы чувствуете, что физически не вывозите все это безумие. Рука тянется
                                к «допингу» — тортику или к бокалу вина, чтобы снизить психологическую нагрузку.
                            </div>
                        </div>
                    </div>

                    <div className={s.btnWrap}>
                        <a className={s.btn} href={"#"}>ПОДРОБНЕЕ...</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForWhoPractic;