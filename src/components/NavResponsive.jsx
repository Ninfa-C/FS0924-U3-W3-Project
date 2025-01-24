import { useMediaQuery } from 'react-responsive';
import AsideLg from './AsideLg';
import MyNav from './MyNav';

const NavResponsive = () => {
  const lg = useMediaQuery({ query: '(min-width: 992px)' });
  
  return (
    <>
      {lg ? < AsideLg /> : <MyNav />}
    </>
  );
};

export default NavResponsive