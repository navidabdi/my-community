import { useParams } from 'react-router-dom';
import { usePost } from '@tribeplatform/react-sdk/hooks';
import {
  BellIcon,
  DotsHorizontalIcon,
  ShareIcon,
} from '@heroicons/react/outline';
import LikeBtn from './LikeBtn';

const PostPage = () => {
  const params = useParams();
  const postId = params.postId as string;
  const { data: post } = usePost({
    id: postId,
  });

  return (
    <section className="container flex flex-col gap-6 mb-10">
      <article
        className="flex flex-col gap-4  bg-white px-5 py-7 rounded-lg shadow-sm"
        key={post?.id}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              loading="lazy"
              className="w-10 h-10 rounded-full"
              src={`https://tribe-s3-production.imgix.net/${post?.owner?.member?.profilePicture?.id}?w=200&h=200&auto=compress,format&dl`}
              alt={`${post?.owner?.member?.name}`}
            />

            <div className="author-info">
              <p className="text-gray-700 font-semibold leading-4">
                {post?.owner?.member?.name}
              </p>
              <span className="text-sm text-gray-500">
                {post?.owner?.member?.tagline}
              </span>
            </div>
          </div>
          <button aria-label="more">
            <DotsHorizontalIcon className="w-5 text-gary-500" />
          </button>
        </div>
        <div className="w-full border-t border-blue-100/50 my-1 menu-divider"></div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">
            {post?.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: post?.shortContent as string }}
            className="text-gray-600 text-sm md:text-[1rem] md:leading-6"
          ></div>
        </div>

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
      </article>
    </section>
  );
};

export default PostPage;