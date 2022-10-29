import s from './Installment.module.scss'
export default function Installment({setIsOpen}) {

    return (
        <div id='installment' className={s.container}>
            <div style={{'width' : '100%', 'padding' : '27px 0px','background' : '#FF4D01'}} classname={s.ussual}>
                    <p className={s.main}>У нас есть рассрочка от разных банков 
                        <br />
                    на 3, 6 или 12 месяцев без переплат!
                    </p>
            </div>
            <div className={s.ussual}>
                    <p>
                    Никаких переплат — стоимость курса остается фиксированной и просто «разбивается» на 3, 6 или 12 равных выплат.
                    <br/>
                    Не нужно ничего платить прямо сейчас — первая выплата только через месяц.
                    <br/>
                    Нажмите на кнопку “Заказать” и заполните заявку. Мы вам позвоним.

                    </p>
            </div>
            <button onClick={() => setIsOpen(true)}>оставить заявку</button>
        </div>
    )
}