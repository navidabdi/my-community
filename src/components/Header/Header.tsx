import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  PlusIcon,
  BellIcon,
  MenuAlt1Icon,
  MenuIcon,
} from '@heroicons/react/outline';

import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuTriger, setMobileMenuTriger] = useState<boolean>(false);
  const { data: user } = useAuthMember();
  const [trigerProfileMenu, setTrigerProfileMenu] = useState<boolean>(false);
  const userName = user?.name;

  return (
    <>
      <header className="bg-white py-4 mb-6 shadow-sm z-20 relative">
        <nav className="container-xl items-center flex justify-between">
          <div className="flex gap-4 items-center">
            <button
              className="text-blue-900 xl:hidden"
              onClick={() => setMobileMenuTriger(!mobileMenuTriger)}
            >
              {mobileMenuTriger ? (
                <MenuIcon className="w-7" />
              ) : (
                <MenuAlt1Icon className="w-7" />
              )}
            </button>
            <Link
              to="/"
              className="sm:text-lg lg:text-xl font-bold text-blue-900"
            >
              Dev Community
            </Link>
          </div>
          {!user ? (
            <div className="flex gap-5 items-center">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in py-3 px-4 text-blue-50 font-semibold sm:py-4 sm:px-5 rounded-[.3rem] leading-3"
              >
                Login
              </Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          ) : (
            <div className="relative flex gap-3">
              <button className="bg-blue-50 transition-all duration-150 border group border-blue-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <BellIcon className="w-5 text-blue-900 group-hover:rotate-12" />
              </button>
              <button className="bg-blue-600 transition-all duration-150 border group border-blue-600 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <PlusIcon className="w-5 text-white group-hover:rotate-12" />
              </button>
              {user?.profilePictureId ? (
                <img
                  onClick={() => setTrigerProfileMenu(!trigerProfileMenu)}
                  loading="lazy"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={`https://tribe-s3-production.imgix.net/${user?.profilePictureId}?w=200&h=200&auto=compress,format&dl`}
                  alt={`${user?.name}`}
                />
              ) : (
                <div
                  onClick={() => setTrigerProfileMenu(!trigerProfileMenu)}
                  className="w-10 h-10 bg-blue-50 cursor-pointer rounded-full flex items-center justify-center font-bold text-blue-700"
                >
                  {userName?.split('')[0]}
                </div>
              )}

              <ProfileMenu trigerProfileMenu={trigerProfileMenu} />
            </div>
          )}
        </nav>
      </header>
      <MobileMenu mobileMenuTriger={mobileMenuTriger} />
    </>
  );
};

export default Header;
