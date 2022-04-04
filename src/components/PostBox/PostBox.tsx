import { Post } from '@tribeplatform/gql-client/types';
import { ShareIcon, BellIcon } from '@heroicons/react/outline';
import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import LikeBtn from './LikeBtn';
import PostBoxMenu from './PostBoxMenu';
import AddComment from './AddComment';
import CommentList from './CommentList';
import UserAvatar from './UserAvatar';

const PostBox = ({
  post,
  setTrigerShareBox,
  trigerShareBox,
  setShareLink,
}: {
  post?: Post;
  setTrigerShareBox?: any;
  trigerShareBox?: boolean;
  setShareLink?: any;
}) => {
  const location = useLocation();
  const { data: authMember } = useAuthMember();

  return (
    <article className="flex flex-col gap-4 box relative mb-5" key={post?.id}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <UserAvatar post={post} />
          <div className="author-info">
            <p className="text-gray-700 font-semibold leading-4">
              {post?.createdBy?.member?.name}
            </p>
            <span className="text-sm text-gray-500">
              {post?.createdBy?.member?.tagline}
            </span>
          </div>
        </div>
        <PostBoxMenu post={post} />
      </div>
      <div className="w-full border-t border-blue-100/50 my-1 menu-divider"></div>
      <Link to={`/post/${post?.id}`} className="flex flex-col gap-2">
        <h2 className="text-lg md:text-xl font-semibold line-clamp-2 text-gray-800">
          {post?.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: post?.shortContent as string,
          }}
          className="text-gray-600 text-sm md:text-[1rem] md:leading-6"
        ></div>
      </Link>

      {post?.reactionsCount !== 0 ? (
        <div className="flex">
          <span
            aria-label="👍, +1, thumbsup"
            className="bg-gray-100 flex gap-1 items-center pb-2 pt-1 pr-3 pl-1 rounded-full"
          >
            <span className="text-2xl font-semibold">👍</span>
            <span>{post?.reactionsCount}</span>
          </span>
        </div>
      ) : (
        ''
      )}

      <div className="flex justify-between gap-3 mt-3">
        <LikeBtn post={post} />

        <button className="feed-box-btn group hidden sm:flex">
          <BellIcon className="w-6 h-6 group-hover:-rotate-12" />
          <span>Following</span>
        </button>
        <button
          className="feed-box-btn group"
          onClick={() => {
            setTrigerShareBox(!trigerShareBox);
            setShareLink(post?.id);
          }}
        >
          <ShareIcon className="w-6 h-6 group-hover:-rotate-12" />
          <span>Share</span>
        </button>
      </div>
      {location.pathname.includes('/post') && (
        <>
          <CommentList post={post} />
          {authMember && <AddComment post={post} />}
        </>
      )}
    </article>
  );
};

export default PostBox;
