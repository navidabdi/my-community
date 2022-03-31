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
    <nav className="py-1 bg-white absolute right-20 top-16 rounded-md shadow-lg bg-surface-50 border border-surface-200 focus-visible:ring focus:outline-none">
      <a className="bg-surface-50 text-basicSurface-700 flex items-center px-4 py-2 cursor-pointer">
        <UserCircleIcon className="w-5 mr-3" />
        Your Profile
      </a>
      <a className="bg-surface-50 text-basicSurface-700 flex items-center px-4 py-2 cursor-pointer">
        <AdjustmentsIcon className="w-5 mr-3" />
        Account Settings
      </a>
      <div className="w-full border-t border-surface-200/50 my-2 menu-divider"></div>
      <a className="bg-surface-50 text-basicSurface-700 flex items-center px-4 py-2 cursor-pointer">
        <CogIcon className="w-5 mr-3" />
        Administration
      </a>
      <a className="bg-surface-50 text-basicSurface-700 flex items-center px-4 py-2 cursor-pointer">
        <ShieldCheckIcon className="w-5 mr-3" />
        Moderation
      </a>
      <a className="bg-surface-50 text-basicSurface-700 flex items-center px-4 py-2 cursor-pointer">
        <SupportIcon className="w-5 mr-3" />
        Help &amp; Community
      </a>
      <div className="w-full border-t border-surface-200/50 my-2 menu-divider"></div>
      <a className="bg-surface-50 text-basicSurface-700 flex items-center px-4 py-2 cursor-pointer">
        <LogoutIcon className="w-5 mr-3" />
        <span>Sign out</span>
      </a>
    </nav>
  );
};

export default ProfileMenu;
