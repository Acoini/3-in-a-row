import { useRoutes } from 'react-router-dom';
import { MainRoutes } from './MainRoutes';

export default function Routes(): any {
  return useRoutes([MainRoutes]);
}
