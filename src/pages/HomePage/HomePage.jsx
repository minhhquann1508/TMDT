import { Fragment } from "react";
import TrendingList from "../../components/TrendingList/TrendingList";
import { icons } from '../../utils/icons';
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import ListGender from "../../components/ListGender/ListGender";
import Hero from "../../components/Hero/Hero";
import Marketing from "../../components/Marketing/Marketing";

export default function HomePage() {
    return (
        <Fragment>
            <div className="container">
                <div className="py-10">
                    <h1 className="font-bold text-3xl md:text-4xl mb-5">Trending Styles</h1>
                    <p className='flex items-center gap-3 font-bold text-[17px] mb-10'><span><icons.arrowIcon /></span><span>Shop All Trending Styles</span></p>
                    <TrendingList />
                </div>
                <div className="py-10">
                    <MainCarousel />
                </div>
                <div className="py-10">
                    <ListGender />
                </div>
                <div className="py-10">
                    <Hero />
                </div>
                <div className="py-10">
                    <Marketing />
                </div>
            </div>
        </Fragment>
    )
}
