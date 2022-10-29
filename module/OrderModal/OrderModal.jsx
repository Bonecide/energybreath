import {    useForm } from 'react-hook-form';
import s from './OrderModal.module.scss'

export default function OrderModal ({close}) {
    const {
        register,
        handleSubmit,
        reset
      } = useForm({
        mode: "onSubmit"
      });
      const submit = (data) => {
        reset()
        close(false)
      }
    return (
        <div className={s.Modal} onClick={() => close(false)}>
        <div className={s.ModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={s.bg}>
                        <h3>Энергодыхание</h3>
                        <p>дыхательные  медитации  по полному выходу из стресса
                            <br />
                        и восстановлению организма</p>
                </div>
                <div className={s.form}>
                        <h3>Чтобы зафиксировать стоимость и задать <br/> интересующий вас вопрос, оставьте заявку</h3>
                        <form onSubmit={handleSubmit(submit)}>
                            <input {...register('name')} required placeholder='Ф.И.О'  type="text" />
                            <input {...register('mail')} required placeholder='E-mail' type="email" />
                            <input {...register('phone')} required placeholder='Телефон' type="text" />
                            <button type='submit'> оставить заявку</button>
                        </form>
                </div>
        </div>
    </div>
    )
}