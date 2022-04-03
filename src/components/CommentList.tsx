import { Post } from '@tribeplatform/gql-client/types';

const CommentList = ({ post }: { post?: Post }) => {
  return (
    <div>
      {post?.replies?.nodes?.map((reply) => (
        <div
          className="lg:rounded-lg bg-blue-50/50 my-5 p-4 flex "
          key={reply.id}
        >
          <div className="flex items-start gap-3">
            <img
              src={`https://tribe-s3-production.imgix.net/${post?.owner?.member?.profilePictureId}?w=200&h=200&auto=compress`}
              alt={reply.owner?.member?.name!}
              className="w-12 rounded-full"
            />
            <div>
              <p className="text-xs font-semibold">
                {reply.owner?.member?.name}
                <span className="font-normal"> says:</span>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: reply.shortContent as string,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
