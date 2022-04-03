import { XIcon, ArrowsExpandIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import {
  FacebookIcon,
  TwitterIcon,
  LinkdinIcon,
  MailIcon,
  WhatsAppIcon,
} from './ShareIcons';

const ShareBox = ({
  setTrigerShareBox,
  shareLink,
}: {
  setShareLink: any;
  setTrigerShareBox: any;
  shareLink: string;
}) => {
  const linkToShare = `${window.location.origin.toString()}/post/${shareLink}`;

  const [copy, setCopy] = useState<boolean>(false);

  return (
    <div className="fixed z-20 inset-0">
      <div
        onClick={() => {
          setTrigerShareBox(false);
          setCopy(false);
        }}
        className="bg-black/70 fixed inset-0 z-20"
      ></div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white z-30 relative p-5 rounded-md w-[90%] md:w-[60%] lg:w-[40%] xl:w-[35%]">
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              <button className="px-4 py-2 bg-blue-100 rounded-md">
                Share
              </button>
              <button className="px-4 py-2 rounded-md">Embed</button>
              <button className="px-4 py-2 rounded-md">Rss</button>
            </div>
            <div className="flex gap-4 text-gray-600">
              <ArrowsExpandIcon className="w-6 cursor-pointer hover:text-gray-800" />
              <XIcon
                onClick={() => {
                  setTrigerShareBox(false);
                  setCopy(false);
                }}
                className="w-7 cursor-pointer hover:text-gray-800"
              />
            </div>
          </div>

          <div
            onClick={() => {
              navigator.clipboard.writeText(linkToShare);
              setCopy(true);
            }}
            className="border cursor-pointer relative border-blue-100 mt-10 flex justify-between rounded-md "
          >
            <input
              className="w-full rounded-md h-full p-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600 overflow-hidden"
              type="text"
              defaultValue={linkToShare}
            />
            <span
              className={`p-3 w-20 h-full pointer-events-none rounded-md rounded-l-none text-center absolute right-0 top-[50%] bg-blue-50 translate-y-[-50%]  ${
                copy
                  ? 'text-blue-700 font-semibold bg-blue-200'
                  : 'text-gray-700'
              }`}
            >
              {copy ? 'Copied!' : 'Copy'}
            </span>
          </div>

          <div className="flex gap-2 mt-10">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${linkToShare}`}
              target="_blank"
              className="share-btn"
            >
              <FacebookIcon />
            </a>
            <a
              href={`https://twitter.com/share?url=${linkToShare}`}
              target="_blank"
              className="share-btn"
            >
              <TwitterIcon />
            </a>
            <a
              href={`https://linkedin.com/shareArticle?url=${linkToShare}`}
              target="_blank"
              className="share-btn"
            >
              <LinkdinIcon />
            </a>
            <a
              href={`https://web.whatsapp.com/send?text=What%27s%20New%3F%20${linkToShare}`}
              target="_blank"
              className="share-btn"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`mailto:abc@example.com?subject=ShareLink=${linkToShare}`}
              className="share-btn"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareBox;
