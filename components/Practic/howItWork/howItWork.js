import s from "./howItWork.module.scss"

const HowItWork = () => {
    return (
        <section className={s.howItWork}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.title}>
                        КАК ЭТО РАБОТАЕТ?
                    </div>

                    <div className={s.items}>
                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Эмоции отражаются на физиологии
                            </div>
                            <div className={s.itemText}>
                                Например, при улыбке задействуется 17 мышц, а при сосредоточении на чем-то —
                                до 43. Так же и с дыханием — когда вы спокойны, ваше дыхание замедляется и углубляется.
                                Когда чувствуете страх или напряжение, дыхание ускоряется и становится более частым.
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Активируется ваша нервная система
                            </div>
                            <div className={s.itemText}>
                                В спокойном состоянии парасимпатическая нервная система производит расслабляющий
                                эффект, а при реакции организма на стресс активируется симпатическая.
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                ТЕЛО И ЭМОЦИИ
                            </div>
                            <div className={s.itemText}>
                                Эмоции влияют на физическое состояние, но это работает и в обратном направлении.
                            </div>
                        </div>
                    </div>

                    <div className={s.subTitle}>
                        Вы можете настраивать свою нервную систему буквально <span> по команде</span>
                    </div>
                    <div className={s.text}>
                        Дыхание влияет на процесс, который мы не можем контролировать сознательно — использовать
                        скрытые возможности организма, недоступные в обычной жизни. <br/>
                        В вас заложено намного больше возможностей и способностей, ключ к которым находится
                        у вас прямо перед глазами.
                    </div>
                    <div className={s.subTitle}>
                        Использовать этот ключ или оставаться в неведении — решать вам.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;