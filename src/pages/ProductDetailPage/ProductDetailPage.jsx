import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Select } from 'antd';
import MainBreadCrumb from '../../components/MainBreadCrumb/MainBreadCrumb';

const options = [
    {
        value: '7',
        label: <h3 className="font-semibold text-[13.5px]">US 7</h3>,
    },
    {
        value: '8',
        label: <h3 className="font-semibold text-[13.5px]">US 8</h3>,
    },
    {
        value: '9',
        label: <h3 className="font-semibold text-[13.5px]">US 9</h3>,
    },
]

export default function ProductDetailPage() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const items = [
        {
            title: <Link to={'/'}>Home</Link>,
        },
        {
            title: 'Detail',
        },
        {
            title: <h3 className="font-semibold">CHUCK 70 MONOCHROME - TITLE</h3>,
        },
    ]

    return (
        <Fragment>
            <div className="container px-20 flex py-5 gap-10">
                <div className="flex-[60%]">
                    <MainBreadCrumb items={items} />
                    <div className="mt-3 overflow-hidden shadow-md">
                        <img src="https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA07994C00510H-1.jpg" alt="" />
                    </div>
                </div>
                <div className="flex-[40%]">
                    <div className="pb-8 border-b border-[#ccc]">
                        <h3 className="font-bold text-xl mb-3">Chuck 70 Monochrome</h3>
                        <p className="mb-5 font-bold">₫1,000,000.00</p>
                        <p className="text-[14px] leading-6 font-semibold">
                            CHẾ ĐỘ ĐỘNG CƠ Có được một chút khoa học viễn tưởng trong bản cải tiến Chuck 70 này,
                            nơi phong cách đua xe thể thao kết hợp với sự tinh tế của tương lai. Các điểm nhấn phản chiếu hòa quyện với
                        </p>
                    </div>
                    <div className="py-5 border-b border-[#ccc]">
                        <h3 className="mb-3 text-sm">Size</h3>
                        <Select
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Select your size"
                            onChange={handleChange}
                            options={options}
                        />
                    </div>

                    <div className="py-5">
                        <h3 className="mb-3 text-xs uppercase font-bold">Quantity</h3>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
