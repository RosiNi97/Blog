const ProfileTemplate = (props: {username:any}) => {
  return <div><div className="userProfile">Hello, {props.username}</div>
  <ul className="userOptions">OPTIONS:
    <li>Change Password</li>
    <li>Delete Account</li>
  </ul>
  </div>
};
export default ProfileTemplate;
