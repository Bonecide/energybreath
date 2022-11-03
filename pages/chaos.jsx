import ChaosComponent from "../components/Chaos/ChaosComponent";
import Layout from "../components/Layout/Layout";
import s from '../styles/practic.module.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Chaos = () => {

    const Up = () => {
        window.scrollTo( {
            top : 0,
            behavior : 'smooth',
        })
    }
    return (
        <Layout>
             <div className={s.fixed}>

            <div className={s.linkSocial} >
                <a href="https://wa.me/79147351027?text=Здравствуйте%2C+у+меня+есть+вопрос" target={'_blank'} rel='noreferrer'><MailOutlineIcon className={s.phoneIcon}/></a>
                <a href="https://wa.me/79518460471?text=Здравствуйте%2C+у+меня+есть+вопрос" target={'_blank'} rel='noreferrer'><LocalPhoneIcon className={s.phoneIcon}/></a>
                <a onClick={Up}  rel='noreferrer'><ArrowForwardIosIcon style={{'transform' : 'rotate(-90deg)'}} className={s.phoneIcon}/></a>
            </div>

            </div>
            <ChaosComponent/>
        </Layout>
    );
};

export default Chaos;