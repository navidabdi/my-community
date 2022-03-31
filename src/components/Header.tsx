import { useAuthMember } from '@tribeplatform/react-sdk/hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  const { data: user } = useAuthMember();
  const [trigerProfileMenu, setTrigerProfileMenu] = useState<boolean>(false);
  return (
    <>
      <header className="bg-white py-4 mb-6 shadow-sm">
        <nav className="container-xl items-center flex justify-between">
          <Link to="/">
            <h1 className="sm:text-lg lg:text-xl font-bold text-blue-900">
              Developers Community
            </h1>
          </Link>
          {!user && (
            <div className="flex gap-5 items-center">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in py-3 px-4 text-blue-50 font-semibold sm:py-4 sm:px-5 rounded-[.3rem] leading-3"
              >
                Login
              </Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
          {user && (
            <div
              className="relative cursor-pointer"
              onClick={() => setTrigerProfileMenu(!trigerProfileMenu)}
            >
              <img
                loading="lazy"
                className="w-10 h-10 rounded-full"
                src={`https://tribe-s3-production.imgix.net/${user.profilePictureId}?w=200&h=200&auto=compress,format&dl`}
                alt={`${user.name}`}
              />
              {trigerProfileMenu && <ProfileMenu />}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
