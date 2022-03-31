import {
  UserCircleIcon,
  AdjustmentsIcon,
  SupportIcon,
  CogIcon,
  ShieldCheckIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

import { useLogout } from '../hooks/useLogout';

interface Props {
  trigerProfileMenu: boolean;
}

const ProfileMenu: React.FC<Props> = (props: Props) => {
  const logout = useLogout();
  return (
    <nav
      className={`py-1 bg-white absolute right-0 top-[110%] transition-transform duration-200 ease-in-out w-[13rem] rounded-md shadow-lg bg-surface-50 border border-blue-100 focus-visible:ring focus:outline-none ${
        props.trigerProfileMenu
          ? 'scale-100 pointer-events-auto opacity-100'
          : 'scale-0 pointer-events-none opacity-0'
      }`}
    >
      <a className="profile-nav-link" href="#">
        <UserCircleIcon className="w-5 mr-3" />
        Your Profile
      </a>
      <a className="profile-nav-link" href="#">
        <AdjustmentsIcon className="w-5 mr-3" />
        Account Settings
      </a>
      <div className="w-full border-t border-blue-200/50 my-2 menu-divider"></div>
      <a className="profile-nav-link" href="#">
        <CogIcon className="w-5 mr-3" />
        Administration
      </a>
      <a className="profile-nav-link" href="#">
        <ShieldCheckIcon className="w-5 mr-3" />
        Moderation
      </a>
      <a className="profile-nav-link" href="#">
        <SupportIcon className="w-5 mr-3" />
        Help &amp; Community
      </a>
      <div className="w-full border-t border-blue-200/50 my-2 menu-divider"></div>
      <a
        className="profile-nav-link"
        href="#"
        onClick={() => {
          logout();
        }}
      >
        <LogoutIcon className="w-5 mr-3" />
        <span>Sign out</span>
      </a>
    </nav>
  );
};

export default ProfileMenu;
