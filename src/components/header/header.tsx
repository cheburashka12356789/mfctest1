
import {Link} from "react-router-dom"
import style from './Header.module.sass'
import logo from '../../assets/logo.svg'
import login from '../../assets/loginIcon.svg'


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header_wrap}>
                <div className={style.header_logo}>
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <p className={style.header_title}>ЕДИНАЯ СПРАВОЧНАЯ СИСТЕМА ЦЕНТРОВ ГОСУДАРСТВЕННЫХ <br/>И
                        МУНИЦИПАЛЬНЫХ УСЛУГ "МОИ <br/>ДОКУМЕНТЫ"<br/> РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
                </div>
                <span className={style.header_line}></span>
                <div className={style.header_login}>
                    <div className={style.header_login__info}>
                        <img src={login} alt="login icon"/>
                        <div className={style.header_login__title}>
                            <p>УЧЕТНАЯ ЗАПИСЬ</p>
                            <p>ФИО СОТРУДНИКА</p>
                        </div>
                    </div>
                    <p className={style.header_login__exit}>ВЫЙТИ</p>
                </div>

            </div>
        </header>
    );
};

export default Header;