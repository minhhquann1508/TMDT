import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import MainBreadCrumb from '../../components/MainBreadCrumb/MainBreadCrumb';
import LayoutSection from '../../components/LayoutSection/LayoutSection';

export default function CollectionsPage() {
    const items = [
        {
            title: <Link to={'/'}>Home</Link>,
        },
        {
            title: <Link to={'/'}>All Collections</Link>,
        },
        {
            title: 'Chuck 70',
        },
    ]

    return (
        <Fragment>
            <div className='container pt-3'>
                <MainBreadCrumb items={items} />
            </div>
            <div className='p-3'>
                <img src="https://www.converse.vn/media/catalog/category/Chuck_70_Main.jpg" alt="banner" />
            </div>
            <div className='p-3'>
                <LayoutSection />
            </div>
        </Fragment>
    )
}
