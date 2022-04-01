import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline';

import { Post } from '@tribeplatform/gql-client/types';
import { useDeletePost } from '@tribeplatform/react-sdk/hooks';
import { hasScopesPermission } from '@tribeplatform/gql-client/permissions';
import { useState } from 'react';

interface Props {
  post: Post;
}

const FeedBoxMenu: React.FC<Props> = (props: Props) => {
  const { post } = props;
  const { mutateAsync: deletePost } = useDeletePost();
  const [canDelete] = hasScopesPermission(post, ['deletePost']);

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  if (!canDelete) return null;

  return (
    <div className="flex gap-3">
      <button
        aria-label="Edit"
        className="text-gray-500 focus:text-blue-800 transition-all duration-150 ease-in hover:text-blue-600"
      >
        <PencilAltIcon className="w-6 h-6 " />
      </button>
      <button
        aria-label="Delete"
        className={`text-gray-500 transition-all duration-150 ease-in focus:text-red-800 hover:text-red-600 
        ${isDeleted ? 'animate-bounce' : ''}`}
        onClick={() =>
          deletePost({
            id: post.id,
          }).then(() => {
            setIsDeleted(true);
            setTimeout(() => {
              setIsDeleted(false);
            }, 1500);
          })
        }
      >
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FeedBoxMenu;
