import s from "./ViciousCircle.module.scss"

const ViciousCircle = ({setIsOpen}) => {
    return (
        <div className={s.ViciousCircle}>
            <div className={s.header}>
                <div className="container">
                    <div className={s.title}>
                        Это похоже на замкнутый круг
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.items}>
                        <div className={s.item}>
                            <div className={s.x}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L23 23" stroke="black" strokeWidth="5"/>
                                    <path d="M23 2L2 23" stroke="black" strokeWidth="5"/>
                                </svg>
                            </div>
                            <div className={s.itemText}>
                                Работать не хочется и не получается
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.x}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L23 23" stroke="black" strokeWidth="5"/>
                                    <path d="M23 2L2 23" stroke="black" strokeWidth="5"/>
                                </svg>
                            </div>
                            <div className={s.itemText}>
                                Творческие задачи выполняются плохо
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.x}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L23 23" stroke="black" strokeWidth="5"/>
                                    <path d="M23 2L2 23" stroke="black" strokeWidth="5"/>
                                </svg>
                            </div>
                            <div className={s.itemText}>
                                Финансов и способов заработать становится меньше
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.x}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L23 23" stroke="black" strokeWidth="5"/>
                                    <path d="M23 2L2 23" stroke="black" strokeWidth="5"/>
                                </svg>
                            </div>
                            <div className={s.itemText}>
                                Всплывают хронические болезни, здоровье ухудшается на глазах
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.title}>
                    Разорвите этот замкнутый круг,
                </div>
                <div className={s.text}>
                    научитесь сохранять внутреннее спокойствие
                    и действуйте эффективно в любой ситуации!
                </div>
                <div className={s.btnWrap}>
                    <a onClick = {() => setIsOpen(true)} className={s.btn}>
                        Записаться на курс
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ViciousCircle;