import {
  HomeIcon,
  ViewGridIcon,
  PresentationChartBarIcon,
  FireIcon,
  LinkIcon,
  AnnotationIcon,
} from '@heroicons/react/outline';

const SideMenu = () => {
  return (
    <aside className="hidden xl:block xl:col-span-1 ">
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

export default SideMenu;
