import s from "./breathMagician.module.scss"

const BreathMagician = ({setIsOpen}) => {



    return (
        <section className={s.breathMagician}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.subTitle}>
                        Легендарный практикум Романа Карловского
                    </div>
                    <div className={s.mainInfo}>
                        <div className={s.title}>
                            Маг Дыхания
                        </div>
                        <div className={s.text}>
                            Овладейте методом управления реальностью, чтобы ясно мыслить,
                            быть в ресурсном состоянии и достигать смелых целей в любые времена
                        </div>
                    </div>
                    <div className={s.btnWrap}>
                        <a onClick = {() => setIsOpen(true)} className={s.btn}>Записаться на курс</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreathMagician;