import { Row, Col } from 'antd';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

import classes from '../Header/Header.module.css';

import { icons } from '../../utils/icons';
import SignInButton from '../SignInButton/SignInButton';
import InputSearchButton from '../InputSearchButton/InputSearchButton';

export default function Header() {
    return (
        <header className='py-3 shadow-sm shadow-slate-300'>
            <Row className='container flex items-center'>
                <Col span={6}>
                    <Logo />
                </Col>
                <Col span={12}>
                    <ul className={`${classes['my-nav']} flex gap-5 justify-center items-center`}>
                        <li className='py-2 font-semibold text-[16px]'>
                            <Link>Men</Link>
                        </li>
                        <li className='py-2 font-semibold text-[16px]'>
                            <Link>Women</Link>
                        </li>
                        <li className='py-2 font-semibold text-[16px]'>
                            <Link>Kids</Link>
                        </li>
                        <li className='py-2 font-semibold text-[16px] text-red-600 capitalize'>
                            <Link>Sale up to 50%</Link>
                        </li>
                    </ul>
                </Col>
                <Col span={6} className='flex items-center gap-5 justify-end'>
                    <SignInButton />
                    <button className='font-semibold text-[20px]'><span><icons.heartIcon /></span></button>
                    <button className='font-semibold text-[20px]'><span><icons.cartIcon /></span></button>
                    <InputSearchButton />
                </Col>
            </Row>
        </header>

    )
}
