import user from '../assets/img/user.svg';

export default function Rating({title, name, children}){
    return (
        <div className="rating-card">
            <h3>"{title}"</h3>
            <div>
                <img src={user} alt="" width={50} height={50} />
                <p>{name}</p>
            </div>
            {children}
        </div>
    )
}