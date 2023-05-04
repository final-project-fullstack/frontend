import style from "./footer.module.css";
import { NavLink } from "react-router-dom";



const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>
        <b>Team</b>
        <div className={style.cards}>

            <div className={style.card}>
                <p>Ann</p>
                <NavLink to="https://github.com/AnnScherer">
                    <i class="fa-brands fa-github fa-lg"></i>


                </NavLink>
                <NavLink to="https://www.linkedin.com/in/anyamani-scherer-160538269/">
                    <i class="fa-brands fa-linkedin"></i>

                </NavLink>
            </div>
            <div className={style.card}>
                <p>Eduard</p>
                <NavLink to="https://github.com/EduardMetzler">
                    <i class="fa-brands fa-github fa-lg"></i>


                </NavLink>
                <NavLink to="https://www.linkedin.com/in/eduard-metzler-092a84216/">
                    <i class="fa-brands fa-linkedin"></i>

                </NavLink>
            </div>
            <div className={style.card}>
                <p>Steffen</p>
                <NavLink to="https://github.com/exestiert">
                    <i class="fa-brands fa-github fa-lg"></i>


                </NavLink>
                <NavLink to="https://www.linkedin.com/in/steffen-lemke-b27825224/">
                    <i class="fa-brands fa-linkedin"></i>

                </NavLink>
            </div>

            <div className={style.card}>
                <p>Ramon</p>
                <NavLink to="4">
                    <i class="fa-brands fa-github fa-lg"></i>


                </NavLink>
                <NavLink to="4">
                    <i class="fa-brands fa-linkedin"></i>

                </NavLink>
            </div>





        </div>


        <NavLink to="4">Impressum</NavLink>
        <div className="copyright">{`Copyright © Final Projekt ${year}`}</div>
    </footer>;
};

export default Footer;