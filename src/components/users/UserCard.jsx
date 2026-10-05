import './UserCard.css'

export function UserCard({ userType }) {
  return (
    <article className="user-card">
      <p className="who-can-use-number">{userType.number}</p>

      <div className="who-can-use-card-content">
        
        <div className="who-can-use-icon">
          <img src={userType.icon} alt="" />
          </div>

        <h4>{userType.title}</h4>

        <p>{userType.description}</p>
      </div>
    </article>
  );
}
