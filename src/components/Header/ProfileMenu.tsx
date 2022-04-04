import {
  UserCircleIcon,
  AdjustmentsIcon,
  SupportIcon,
  CogIcon,
  ShieldCheckIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

import { useLogout } from '../../hooks/useLogout';

const ProfileMenu = ({ trigerProfileMenu }: { trigerProfileMenu: boolean }) => {
  const logout = useLogout();
  return (
    <nav
      className={`py-1 bg-white absolute right-0 top-[110%] transition-transform duration-200 ease-in-out w-[13rem] rounded-md shadow-lg bg-surface-50 border border-blue-100 focus-visible:ring focus:outline-none ${
        trigerProfileMenu
          ? 'scale-100 pointer-events-auto opacity-100'
          : 'scale-0 pointer-events-none opacity-0'
      }`}
    >
      <button className="profile-nav-link">
        <UserCircleIcon className="w-5 mr-3" />
        Your Profile
      </button>
      <button className="profile-nav-link">
        <AdjustmentsIcon className="w-5 mr-3" />
        Account Settings
      </button>
      <div className="w-full border-t border-blue-200/50 my-2 menu-divider"></div>
      <button className="profile-nav-link">
        <CogIcon className="w-5 mr-3" />
        Administration
      </button>
      <button className="profile-nav-link">
        <ShieldCheckIcon className="w-5 mr-3" />
        Moderation
      </button>
      <button className="profile-nav-link">
        <SupportIcon className="w-5 mr-3" />
        Help &amp; Community
      </button>
      <div className="w-full border-t border-blue-200/50 my-2 menu-divider"></div>
      <button
        className="profile-nav-link"
        onClick={() => {
          logout();
        }}
      >
        <LogoutIcon className="w-5 mr-3" />
        <span>Sign out</span>
      </button>
    </nav>
  );
};

export default ProfileMenu;
