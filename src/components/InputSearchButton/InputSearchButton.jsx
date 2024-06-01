import { useState } from 'react';
import { icons } from '../../utils/icons'
import { Modal } from 'antd';

export default function InputSearchButton() {
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
        <>
            <button onClick={showModal} className='font-bold text-[20px]'><span><icons.searchIcon /></span></button>
            <Modal title="Searching" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}
