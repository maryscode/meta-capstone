import user from '../assets/img/user.svg';

export default function Rating(){
    return (
        <div className="rating-card">
            <h3>"Excellent Service"</h3>
            <div>
                <img src={user} alt="" width={50} height={50} />
                <p>Name</p>
            </div>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Review test</p>
        </div>
    )
}