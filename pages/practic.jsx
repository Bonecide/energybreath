import PracticComponent from "../components/Practic/PracticComponent"
import s from '../styles/practic.module.scss'
import Layout from './../components/Layout/Layout';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Practic() {

    const Up = () => {
        window.scrollTo( {
            top : 0,
            behavior : 'smooth',
        })
    }
    return(
        <Layout>
            <div className={s.fixed}>

        <div className={s.linkSocial} >
            <a href="https://wa.me/79147351027?text=Здравствуйте%2C+у+меня+есть+вопрос" target={'_blank'} rel='noreferrer'><MailOutlineIcon className={s.phoneIcon}/></a>
            <a href="tel:+996%20507%2049-60-44" target={'_blank'} rel='noreferrer'><LocalPhoneIcon className={s.phoneIcon}/></a>
            <a onClick={Up}  rel='noreferrer'><ArrowForwardIosIcon style={{'transform' : 'rotate(-90deg)'}} className={s.phoneIcon}/></a>
        </div>
       
        </div>
            <PracticComponent />
        </Layout>
    )
}