import s from './Footer.module.scss'
import IMG from './../../components/Main/IMG/IMG';

export default function Footer() {

    return(
        <footer className={s.footer}>
              <div className={s.social}>
                            <IMG src={'/img/icons/orangeTelegram.svg'} alt={'telegram'}/>
                            <IMG src={'/img/icons/orangeVK.svg'} alt={'vk'}/>
                            <IMG src={'/img/icons/orangeInst.svg'} alt={'instagram'}/>
                    </div>
            <div className={s.security}>
                    <p>© Все права защищены.</p>
                    <p>EXŌ Protection.</p>
                    <p>Свидетельство номер: 79259583220</p>
            </div>
        </footer>
    )
}