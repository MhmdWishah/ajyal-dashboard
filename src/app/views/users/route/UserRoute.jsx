import { authRoles } from 'app/auth/authRoles';
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
// import UserTable from '../UserTable';

const UserTable = Loadable(lazy(() => import('../UserTable')));

const UserRoute = [{ path: '/users', element: <UserTable />, auth: authRoles.editor }];

export default UserRoute;
