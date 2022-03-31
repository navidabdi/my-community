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
    <section className="container flex flex-col gap-6">
      {console.log(posts)}
      {posts.map((post, i) => (
        <article
          className="flex flex-col gap-4 bg-white px-5 py-7 rounded-lg"
          key={post?.id}
        >
          <div className="flex items-center gap-4">
            <div className="avatar">
              <img
                className="w-12 h-12 rounded-full"
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
          <div className="flex justify-between mt-3">
            <button className="feed-box-btn ">
              <ThumbUpIcon className="w-5 h-5" /> <span>Like</span>
            </button>
            <button className="feed-box-btn hidden sm:flex">
              <BellIcon className="w-5 h-5" /> <span>Following</span>
            </button>
            <button className="feed-box-btn">
              <ShareIcon className="w-5 h-5" /> <span>Share</span>
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FeedBox;