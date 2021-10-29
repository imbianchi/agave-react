import './style.scss'
const Avatar = ({imgUrl, name}) => {

    return (
        <div className='avatar'>
            <img src={imgUrl} alt={name} />
            <p className='name'>{name}</p>
        </div>
    )
}

export default Avatar