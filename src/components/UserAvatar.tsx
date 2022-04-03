import { Post } from '@tribeplatform/gql-client/types';

const UserAvatar = ({ post }: { post?: Post }) => {
  const profileLinkId = post?.createdBy?.member?.profilePictureId;
  const userName = post?.createdBy?.member?.name;

  return (
    <div className="">
      {profileLinkId ? (
        <img
          loading="lazy"
          className="w-10 rounded-full"
          src={`https://tribe-s3-production.imgix.net/${profileLinkId}?w=200&h=200&auto=compress`}
          alt={`${userName}`}
        />
      ) : (
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center font-bold text-blue-700">
          {userName?.split('')[0]}
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
