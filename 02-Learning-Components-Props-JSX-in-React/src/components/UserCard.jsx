import './UserCard.css'
import raeesPic from '../assets/raees.jpg'

const UserCard = ({ name, desc, image, style }) => {
    return (
        <div className='user-card' style={style}>
            <p className="user-card-name">{name}</p>
            <img src={image} alt="pzic" className='user-card-image' />
            <p className='user-card-desc'>{desc}</p>

        </div>
    )
}

export default UserCard