import { Post } from '@tribeplatform/gql-client/types';
import { Link } from 'react-router-dom';
import LikeBtn from './LikeBtn';

import { ShareIcon, BellIcon } from '@heroicons/react/outline';
import FeedBoxMenu from './FeedBoxMenu';
import AddComment from './AddComment';
import CommentList from './CommentList';
import { useLocation } from 'react-router-dom';

interface Props {
  post: Post | undefined;
}

const PostBox: React.FC<Props> = (props: Props) => {
  const { post } = props;

  const profileLinkId =
    post?.createdBy?.member?.profilePictureId ||
    post?.owner?.member?.profilePictureId;
  const userName = post?.createdBy?.member?.name || post?.owner?.member?.name;
  const userTagLine =
    post?.createdBy?.member?.tagline || post?.owner?.member?.tagline;

  const location = useLocation();

  return (
    <article className="flex flex-col gap-4 box relative mb-5" key={post?.id}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            loading="lazy"
            className="w-10 h-10 rounded-full"
            src={`https://tribe-s3-production.imgix.net/${profileLinkId}?w=200&h=200&auto=compress`}
            alt={`${userName}`}
          />

          <div className="author-info">
            <p className="text-gray-700 font-semibold leading-4">{userName}</p>
            <span className="text-sm text-gray-500">{userTagLine}</span>
          </div>
        </div>
        <FeedBoxMenu post={post} />
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
        <button className="feed-box-btn group">
          <ShareIcon className="w-6 h-6 group-hover:-rotate-12" />
          <span>Share</span>
        </button>
      </div>
      {location.pathname.includes('/post') && (
        <>
          <CommentList post={post} />
          <AddComment post={post} />
        </>
      )}
    </article>
  );
};

export default PostBox;
