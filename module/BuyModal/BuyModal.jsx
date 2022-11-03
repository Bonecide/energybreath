import s from './BuyModal.module.scss'

export default function BuyModal ({close,url}) {

    return (
        <div className={s.Modal} onClick={() => close(false)}>
        <div className={s.ModalContent} onClick={(e) => e.stopPropagation()}>
                <iframe src={url} frameborder="0"></iframe>
        </div>
    </div>
    )
}