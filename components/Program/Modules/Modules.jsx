import s from './Modules.module.scss'
import program from '../../../fake-data/program.json'

export default function Modules() {

    return(
        <div className={s.container}>
            <div className={s.program}>
                    {program.map((info,idx) => (
                        <div className={s.card} key={`moduleN${idx}`}>
                            <p className={s.module}>Модуль {idx + 1}</p>
                            <h1>{info.title}</h1>
                            <div className={s.spheres}>
                            {info.sphere1 &&  (

                                <p>
                                        <span>Сферы проработки: </span>
                                        {info.sphere1}
                                </p>
                            )}
                                <p>{info.sphere2}</p>
                            </div>
                            <div className={s.ResultCONT}>
                                <h3>РЕЗУЛЬТАТ:</h3>
                            </div>
                            <p className={s.result}>{info.result}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}