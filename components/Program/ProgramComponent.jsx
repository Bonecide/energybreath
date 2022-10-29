import s from './ProgramComponent.module.scss'
import IMG from './../Main/IMG/IMG';
import Modules from './Modules/Modules';
import Bonus from './Bonus/Bonus';
import { useState } from 'react';
import OrderModal from '../../module/OrderModal/OrderModal';

export default function ProgramComponent() {

    const [isOpen,setIsOpen] = useState(false)
    return(
        <div className={s.container}>
            <div className={s.bg}>
                    <IMG src="/img/icons/angel.svg" alt="" />
            </div>
            <div className={s.program}>
                <h3>Наполните энергией свою жизнь на <br /> практикуме <span>Маг Дыхания!</span></h3>
                <h3>Программа практикума</h3>
            </div>
            <Modules/>
            <Bonus setIsOpen={setIsOpen}/>
            {isOpen && <OrderModal close={setIsOpen}/>}
        </div>
    )
}