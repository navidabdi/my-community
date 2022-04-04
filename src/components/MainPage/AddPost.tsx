import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useAddPost } from '@tribeplatform/react-sdk/hooks';
import { PostMappingTypeEnum } from '@tribeplatform/gql-client/types';
import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [data, setData] = useState<string>(`<p>What's New?</p>`);
  const [title, setTitle] = useState<string>('');

  const [trigerAddPost, setTrigerAddPost] = useState<boolean>(false);
  const { mutateAsync: addPost } = useAddPost();

  const navigate = useNavigate();
  const { data: authMember } = useAuthMember();

  return (
    <section className=" flex flex-col gap-6 mb-10">
      <div
        className={`box transition-all duration-500 ease-in-out overflow-hidden  ${
          trigerAddPost ? 'h-auto' : 'h-[6.8rem]'
        }`}
      >
        <button
          onClick={() => {
            authMember ? setTrigerAddPost(!trigerAddPost) : navigate('/login');
          }}
          className="bg-blue-50 mb-5 p-3 hover:bg-blue-100 outline-none transition-all w-full duration-150 rounded-sm"
        >
          <h1 className="text-xl text-gray-600">What's on your mind?</h1>
        </button>
        <div
          className={`flex flex-col gap-2 transform  ${
            trigerAddPost ? 'translate-y-0' : 'translate-y-[-150%]'
          }`}
        >
          <label className="input-label mb-0">Title</label>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label className="input-label mb-0">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={data}
            onChange={(event: any, editor: any) => {
              setData(editor.getData());
            }}
          />
          <button
            className="btn w-full"
            onClick={() => {
              addPost({
                spaceId: 'ygoIXkOByRkG',
                input: {
                  postTypeId: 'rb5Gbr3pA4hpqg7',
                  publish: true,
                  mappingFields: [
                    {
                      key: 'title',
                      type: PostMappingTypeEnum.TEXT,
                      value: JSON.stringify(title),
                    },
                    {
                      key: 'content',
                      type: PostMappingTypeEnum.HTML,
                      value: JSON.stringify(data),
                    },
                  ],
                },
              }).then(() => {
                setTitle('');
                setData(`<p>What's New?</p>`);
                setTrigerAddPost(false);
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
