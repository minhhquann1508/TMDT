import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import CollectionsPage from '../pages/CollectionsPage/CollectionsPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';

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
        path: '/collections/:collectionId',
        element: CollectionsPage,
        isShowHeader: true
    },
    {
        path: '/detail/:productId',
        element: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '*',
        element: NotFoundPage,
    },
]