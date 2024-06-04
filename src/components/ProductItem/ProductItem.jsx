import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ product }) {
    const navigate = useNavigate();

    const handleNavigate = (productId) => {
        navigate(`/detail/${productId}`);
    }

    return (
        <div>
            <div onClick={() => handleNavigate(123)} className="overflow-hidden shadow-md cursor-pointer">
                <img className="w-full h-full object-cover" src="https://www.converse.vn/media/catalog/product/cache/92f171526e7977390d5520345996ff51/0/8/0882-CON162050C000004-1.jpg" alt="" />
            </div>
            <div className="py-3">
                <h3 className="mb-8 py-2 font-semibold border-b border-[#ccc]">Chuck 70</h3>
                <p className="text-[13.5px] font-semibold">₫2.000.000</p>
            </div>
            <div className="flex justify-end">
                <Button onClick={() => handleNavigate(123)} type="primary" className="font-semibold">Detail</Button>
            </div>
        </div>
    )
}
