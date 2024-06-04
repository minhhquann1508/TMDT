import { Fragment, useState } from 'react';
import { icons } from '../../utils/icons'
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import SignInForm from '../SignInForm/SignInForm';

export default function SignInButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Fragment>
            <button onClick={showModal} className='font-semibold text-[16px] flex items-center gap-1'><span>Sign In</span><span className='text-[20px]'><icons.userIcon /></span></button>
            <Modal width={400} open={isModalOpen} onOk={handleOk} footer={false} onCancel={handleCancel}>
                <div>
                    <header className='text-2xl font-bold mb-5'>
                        Sign In
                    </header>
                    <p className='mb-2 font-semibold'>
                        To get the most out of converse.vn, enter your account email address and password below.
                    </p>
                    <p className='mb-2 font-semibold'>Don’t have an account yet? <Link className='underline' to={'/sign-up'}>Sign Up</Link></p>
                    <SignInForm />
                </div>
            </Modal>
        </Fragment>
    );
}
