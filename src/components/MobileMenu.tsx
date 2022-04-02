import {
  HomeIcon,
  ViewGridIcon,
  PresentationChartBarIcon,
  FireIcon,
  LinkIcon,
  AnnotationIcon,
} from '@heroicons/react/outline';

import { mobileMenuTrigerAtom } from '../atoms/MobileMenuTrigerAtom';
import { useRecoilState } from 'recoil';

const MobileMenu = () => {
  const [mobileMenuTriger] = useRecoilState(mobileMenuTrigerAtom);

  return (
    <aside
      className={` absolute bg-white z-10 left-0 top-0 min-h-screen pt-28 shadow-2xl px-5 transition-transform duration-200 ease-in-out md:w-[300px] xl:hidden ${
        mobileMenuTriger ? ' translate-x-0' : 'translate-x-[-110%]'
      }`}
    >
      <nav className="flex flex-col gap-2">
        <button className="aside-menu-btn bg-gray-200">
          <HomeIcon className="w-6" /> <span>Home</span>
        </button>
        <button className="aside-menu-btn">
          <ViewGridIcon className="w-6" /> <span>Spaces</span>
        </button>
        <button className="aside-menu-btn">
          <FireIcon className="w-6" /> <span>Get Started</span>
        </button>
        <button className="aside-menu-btn">
          <PresentationChartBarIcon className="w-6" /> <span>Resources</span>
        </button>
        <button className="aside-menu-btn">
          <LinkIcon className="w-6" /> <span>Connect</span>
        </button>
        <button className="aside-menu-btn">
          <AnnotationIcon className="w-6" /> <span>Announcements</span>
        </button>
        <p className="text-[.8rem] p-4 mt-2 max-w-[75%] text-gray-500">
          Terms of Service Privacy Policy © Copyright 2022, Dev Community
        </p>
      </nav>
    </aside>
  );
};

export default MobileMenu;
