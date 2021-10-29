import './style.scss'

const Button = ({ link = false, href='/', type='button', title, onClick, className }) => {
  return (
    link ? <a className='button' href={href}>{title}</a> :
      <input type={type}
        className={`${className} button`}
        value={title} onClick={onClick} />
  )
}

export default Button