import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';

export const routes = [
    {
        path: '/',
        element: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        element: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        element: ProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        element: NotFoundPage,
    },
]