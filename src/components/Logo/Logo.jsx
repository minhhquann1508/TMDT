import { Link } from "react-router-dom";
import logoImg from '../../assets/images/converse-logo.png';

export default function Logo() {
    return (
        <Link to={'/'} className="font-bold text-xl uppercase">
            <img src={logoImg} alt="converse-logo" className="w-[150px]" />
        </Link>
    )
}
