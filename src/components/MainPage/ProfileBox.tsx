import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

const ProfileBox = () => {
  const { data: authMember } = useAuthMember();
  const userName = authMember?.name;

  return (
    <aside className="hidden col-span-3 xl:col-span-1 xl:block">
      <div className="box text-gray-600 p-0 overflow-hidden">
        <div className="relative">
          <img
            src="https://nabiabdi.tribeplatform.com/images/banners/banner-2.jpg"
            alt="banner"
            className="h-32 w-full object-cover"
          />

          {authMember?.profilePictureId ? (
            <img
              src={`https://tribe-s3-production.imgix.net/${authMember?.profilePictureId}?w=200&h=200&auto=compress`}
              alt={`${userName}`}
              className="w-28 border-4 object-cover border-white rounded-full absolute left-[50%] translate-x-[-50%] -bottom-10"
            />
          ) : (
            <div className="w-28 h-28 absolute bg-blue-100 left-[50%] border-4 border-white translate-x-[-50%] -bottom-10 rounded-full flex items-center justify-center text-3xl font-bold text-blue-700">
              {userName?.split('')[0]}
            </div>
          )}
        </div>

        <div className="pt-12 pb-7 px-5 flex gap-7 flex-col items-center">
          <p>Hello There</p>
          <div className="flex gap-2 flex-col items-center">
            <h3 className="font-bold">{authMember?.name}</h3>
            <p className="text-sm">{authMember?.tagline}</p>
            <p className="bg-blue-100 py-1 px-4 font-semibold text-blue-900 rounded-full mt-1">
              {authMember?.role?.name}
            </p>
          </div>
          <button className="feed-box-btn w-full">View Profile</button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileBox;
