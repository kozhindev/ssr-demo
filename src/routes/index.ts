import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import IndexPage from './IndexPage';
import {getIndexPageFetch} from './IndexPage/IndexPage';

export const ROUTE_ROOT = 'root';

const roles = [null];

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles,
    preloadData: () => [getIndexPageFetch()],
} as IRouteItem;
