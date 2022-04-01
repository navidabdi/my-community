import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline';
import DeletePost from './DeletePost';

import { Post } from '@tribeplatform/gql-client/types';
import { useDeletePost } from '@tribeplatform/react-sdk/hooks';
import { hasScopesPermission } from '@tribeplatform/gql-client/permissions';

interface Props {
  trigerFeedBoxMenu: any;
  post: Post;
}

const FeedBoxMenu: React.FC<Props> = (props: Props) => {
  const { post, trigerFeedBoxMenu } = props;

  const { mutate: deletePost } = useDeletePost();
  const [canDelete] = hasScopesPermission(post, ['deletePost']);

  if (!canDelete) return null;

  return (
    <>
      {trigerFeedBoxMenu && (
        <nav
          className={`py-1 bg-white absolute right-10 top-16 transition-transform duration-200 ease-in-out w-[13rem] rounded-md shadow-lg bg-surface-50 border border-blue-100 focus-visible:ring focus:outline-none ${
            trigerFeedBoxMenu
              ? 'scale-100 pointer-events-auto opacity-100'
              : 'scale-0 pointer-events-none opacity-0'
          }`}
        >
          <button className="profile-nav-link">
            <PencilAltIcon className="w-5 mr-3" />
            Edit
          </button>
          <button
            className="profile-nav-link"
            onClick={() =>
              deletePost({
                id: post.id,
              })
            }
          >
            <TrashIcon className="w-5 mr-3" />
            Delete
          </button>
        </nav>
      )}
    </>
  );
};

export default FeedBoxMenu;
