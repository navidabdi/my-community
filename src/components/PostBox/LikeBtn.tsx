import {
  useAddReaction,
  useRemoveReaction,
} from '@tribeplatform/react-sdk/hooks';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid';
import { Post } from '@tribeplatform/gql-client/types';
import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

import { useNavigate } from 'react-router-dom';

const LikeBtn = ({ post }: { post?: Post }) => {
  const { mutate: upvote } = useAddReaction();
  const { mutate: downvote } = useRemoveReaction();

  const reacted = post?.reactions?.some(
    (reaction: { reacted: any; reaction: string }) =>
      reaction.reacted && reaction.reaction === '+1'
  );

  const navigate = useNavigate();
  const { data: authMember } = useAuthMember();

  return (
    <button
      className="feed-box-btn group"
      onClick={() => {
        if (authMember) {
          reacted
            ? downvote({
                postId: post?.id!,
                reaction: '+1',
              })
            : upvote({
                postId: post?.id!,
                input: {
                  reaction: '+1',
                },
              });
        } else {
          navigate('/login');
        }
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
