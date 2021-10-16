import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Item from "./views/Item";
import Test from "./views/Test";

const routes = [
    {
        path: '/test',
        component: Test,
        props: {msg: 'this is test component'}
    },
    {
        path: '/item/:itemId',
        name: 'item',
        component: Item,
        props: true
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '*',
        component: NotFound
    }
];



export default routes;