import './UserCard.css'
import raeesPic from '../assets/raees.jpg'

const UserCard = ({name}) => {
    return (
        <div className='user-card'>
            <p className="user-card-name">{name}</p>
            <img src={raeesPic} alt="pic" className='user-card-image' />
            <p className='user-card-desc'>Description of raees Mughal</p>
            
        </div>
    )
}

export default UserCard