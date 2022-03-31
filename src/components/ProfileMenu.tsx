import {
  UserCircleIcon,
  AdjustmentsIcon,
  SupportIcon,
  CogIcon,
  ShieldCheckIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

const ProfileMenu = () => {
  return (
    <nav className="py-1 bg-white absolute right-0 bottom-100 w-[13rem] rounded-md shadow-lg bg-surface-50 border border-blue-100 focus-visible:ring focus:outline-none">
      <a className="profile-nav-link">
        <UserCircleIcon className="w-5 mr-3" />
        Your Profile
      </a>
      <a className="profile-nav-link">
        <AdjustmentsIcon className="w-5 mr-3" />
        Account Settings
      </a>
      <div className="w-full border-t border-blue-200/50 my-2 menu-divider"></div>
      <a className="profile-nav-link">
        <CogIcon className="w-5 mr-3" />
        Administration
      </a>
      <a className="profile-nav-link">
        <ShieldCheckIcon className="w-5 mr-3" />
        Moderation
      </a>
      <a className="profile-nav-link">
        <SupportIcon className="w-5 mr-3" />
        Help &amp; Community
      </a>
      <div className="w-full border-t border-blue-200/50 my-2 menu-divider"></div>
      <a className="profile-nav-link">
        <LogoutIcon className="w-5 mr-3" />
        <span>Sign out</span>
      </a>
    </nav>
  );
};

export default ProfileMenu;
