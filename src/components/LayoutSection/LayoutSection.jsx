import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme, Collapse } from 'antd';
import ListProduct from '../ListProduct/ListProduct';
const { Header, Sider, Content } = Layout;


const items = [
    {
        key: '1',
        label: <h3 className='uppercase font-bold text-[12px]'>Gender</h3>,
        children: <p>hello</p>,
    },
    {
        key: '2',
        label: <h3 className='uppercase font-bold text-[12px]'>Price</h3>,
        children: <p>hello</p>,
    },
];

const MyCollapse = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};


const LayoutSection = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} width={300} collapsedWidth={0} style={{ background: '#FFFFFF', border: '1px solid #ccc', padding: 12 }} collapsible collapsed={collapsed}>
                <div>
                    <h3 className='font-semibold uppercase text-[13px] p-2 border-b border-[#ccc] mb-3'>All Filters</h3>
                    <div>
                        <MyCollapse />
                    </div>
                </div>
            </Sider>
            <Layout style={{ background: '#FFFFFF' }}>
                <Header
                    style={{
                        padding: '0px 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderLeft: 'none',
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                        }}
                    />
                    <span className='text-[14px] font-bold'>73 Results</span>
                </Header>
                <Content
                    style={{
                        margin: '24px 0px 0px 8px',
                        padding: 12,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <ListProduct products={['', '', '', '']} />
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutSection;