import { Post } from '@tribeplatform/gql-client/types';
import UserAvatar from './UserAvatar';

const CommentList = ({ post }: { post?: Post }) => {
  return (
    <div>
      {post?.replies?.nodes?.map((reply) => (
        <div
          className="lg:rounded-lg bg-blue-50/50 my-5 p-4 flex "
          key={reply.id}
        >
          <div className="flex items-start gap-3">
            <UserAvatar post={reply} />
            <div className="flex-1">
              <p className="text-xs font-semibold">
                {reply?.createdBy?.member?.name}
                <span className="font-normal"> says:</span>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: reply?.shortContent as string,
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
