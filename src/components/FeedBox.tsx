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
    <section className="flex flex-col gap-5">
      {console.log(posts)}
      {posts.map((post, i) => (
        <article className="flex flex-col gap-4 bg-white p-5" key={post?.id}>
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
            <h2 className="text-lg font-semibold text-gray-800">
              {post?.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: post?.shortContent as string }}
              className="text-gray-600 text-sm"
            ></div>
          </div>
          <div className="flex justify-between">
            <button className="flex items-center text-sm justify-between gap-1 py-2 px-4 bg-blue-50 rounded-sm">
              <ThumbUpIcon className="w-5 h-5" /> <span>Like</span>
            </button>
            <button className="flex items-center text-sm justify-between gap-1 py-2 px-4 bg-blue-50 rounded-sm">
              <BellIcon className="w-5 h-5" /> <span>Following</span>
            </button>
            <button className="flex items-center text-sm justify-between gap-1 py-2 px-4 bg-blue-50 rounded-sm">
              <ShareIcon className="w-5 h-5" /> <span>Share</span>
            </button>
          </div>
          {/* <div className="flex flex-col justify-center">{i + 1}.</div>
          <div className="flex flex-col flex-grow">
            <div>{post.title}</div>
            {console.log(post)}
            <div className="flex gap-2 text-xs text-gray-500">
              <div>By {post.createdBy?.member?.name}</div>|
              <div>{post.reactionsCount} upvotes</div>|
              <div>{post.repliesCount} comments</div>
            </div>
          </div> */}
        </article>
      ))}
    </section>
  );
};

export default FeedBox;
