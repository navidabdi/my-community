import { Post } from '@tribeplatform/gql-client/types';
import { TrashIcon } from '@heroicons/react/outline';
import { useDeletePost } from '@tribeplatform/react-sdk/hooks';
import { hasScopesPermission } from '@tribeplatform/gql-client/permissions';

const DeletePost = (props: { post: Post }) => {
  const { post } = props;

  const { mutate: deletePost } = useDeletePost();
  const [canDelete] = hasScopesPermission(post, ['deletePost']);

  if (!canDelete) return null;

  return (
    <TrashIcon
      className="w-5"
      onClick={() =>
        deletePost({
          id: post.id,
        })
      }
    />
  );
};

export default DeletePost;
