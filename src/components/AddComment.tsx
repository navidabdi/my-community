import { Post, PostMappingTypeEnum } from '@tribeplatform/gql-client/types';
import { useState } from 'react';
import { useAddReply } from '@tribeplatform/react-sdk/hooks';

const AddComment = ({ post }: { post?: Post }) => {
  const [text, setText] = useState<string>('');
  const { mutateAsync: addReply } = useAddReply();

  return (
    <>
      <div className="w-full border-t border-blue-100/50 my-1 menu-divider"></div>
      <textarea
        className="input mb-0"
        rows={6}
        placeholder="What's on your mind?"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button
        className="btn mt-0"
        onClick={() => {
          addReply({
            postId: post?.id as string,
            input: {
              postTypeId: 'eMPAXmE0bKD5QyV',
              publish: true,
              mappingFields: [
                {
                  key: 'content',
                  type: PostMappingTypeEnum.HTML,
                  value: JSON.stringify(`<p>${text}</p>`),
                },
              ],
            },
          }).then(() => {
            setText('');
          });
        }}
      >
        Add Comment
      </button>
    </>
  );
};

export default AddComment;
