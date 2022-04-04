import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

import AddPost from './AddPost';
import WelcomeBox from './WelcomeBox';
import SideMenu from './SideMenu';
import ProfileBox from './ProfileBox';
import Feed from './Feed';

const MainPage = () => {
  const { data: authMember } = useAuthMember();

  return (
    <div className="main-container custom-grid grid gap-2 lg:gap-5 justify-center xl:gap-6">
      <SideMenu />
      <div className="col-span-3 xl:col-span-1">
        <AddPost />
        <Feed />
      </div>
      {authMember ? <ProfileBox /> : <WelcomeBox />}
    </div>
  );
};

export default MainPage;
