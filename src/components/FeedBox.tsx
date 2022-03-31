import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { Post } from '@tribeplatform/gql-client/types';
import { useFeed } from '@tribeplatform/react-sdk/hooks';
import { ThumbUpIcon, ShareIcon, BellIcon } from '@heroicons/react/outline';

const FeedBox = () => {
  const { data } = useFeed({
    fields: {
      createdBy: {
        member: 'basic',
      },
    },
    variables: {
      limit: 10,
    },
  });
  const { nodes: posts } = simplifyPaginatedResult<Post>(data);

  return (
    <section className="container flex flex-col gap-6 mb-10">
      {posts.map((post, i) => (
        <article
          className="flex flex-col gap-4  bg-white px-5 py-7 rounded-lg shadow-sm"
          key={post?.id}
        >
          <div className="flex items-center gap-4">
            <div className="avatar">
              <img
                loading="lazy"
                className="w-10 h-10 rounded-full"
                src={`https://tribe-s3-production.imgix.net/${post?.createdBy?.member?.profilePictureId}?w=200&h=200&auto=compress,format&dl`}
                alt={`${post?.createdBy?.member?.name}`}
              />
            </div>
            <div className="author-info">
              <p className="text-gray-700 font-semibold leading-4">
                {post?.createdBy?.member?.name}
              </p>
              <span className="text-sm text-gray-500">
                {post?.createdBy?.member?.tagline}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">
              {post?.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: post?.shortContent as string }}
              className="text-gray-600 text-sm"
            ></div>
          </div>
          <div className="flex justify-between gap-3 mt-3">
            <button className="feed-box-btn group">
              <ThumbUpIcon className="w-5 h-5 group-hover:-rotate-12" />
              <span>Like</span>
            </button>
            <button className="feed-box-btn group hidden sm:flex">
              <BellIcon className="w-5 h-5 group-hover:-rotate-12" />
              <span>Following</span>
            </button>
            <button className="feed-box-btn group">
              <ShareIcon className="w-5 h-5 group-hover:-rotate-12" />
              <span>Share</span>
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FeedBox;
