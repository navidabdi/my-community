import {
  useAddReaction,
  useRemoveReaction,
} from '@tribeplatform/react-sdk/hooks';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid';
import { Post } from '@tribeplatform/gql-client/types';

interface Props {
  post: any;
}

const LikeBtn: React.FC<Props> = (props: Props) => {
  const { post } = props;
  const { mutate: upvote } = useAddReaction();
  const { mutate: downvote } = useRemoveReaction();
  const reacted = post?.reactions?.some(
    (reaction: { reacted: any; reaction: string }) =>
      reaction.reacted && reaction.reaction === '+1'
  );
  return (
    <button
      className="feed-box-btn group"
      onClick={() => {
        reacted
          ? downvote({
              postId: post?.id,
              reaction: '+1',
            })
          : upvote({
              postId: post?.id,
              input: {
                reaction: '+1',
              },
            });
      }}
    >
      {reacted && (
        <ThumbUpIconSolid className="w-6 h-6 group-hover:-rotate-12" />
      )}
      {!reacted && <ThumbUpIcon className="w-6 h-6 group-hover:-rotate-12" />}

      <span>Like</span>
    </button>
  );
};

export default LikeBtn;
