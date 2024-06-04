import { useState } from 'react';
import { icons } from '../../utils/icons'
import { Form, Input, Modal } from 'antd';

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

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <button onClick={showModal} className='font-bold text-[20px]'><span><icons.searchIcon /></span></button>

            <Modal footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h3 className='capitalize text-2xl font-bold mb-5'>Searching</h3>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="keyword"
                    >
                        <Input
                            className='text-sm'
                            size="large"
                            placeholder="Enter some keyword..."
                            prefix={<icons.searchIcon />}
                        />
                    </Form.Item>

                </Form>

            </Modal>
        </>
    );
}
