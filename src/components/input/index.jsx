import './style.scss'

const Input = ({ placeholder, type = 'text', error = '', onChange, id, className }) => {

  return (
    <div className={`input ${error ? 'error' : ''}`}>
      <input type={type} className={className} placeholder={placeholder} onChange={onChange} id={id} />
      <span className='error'>{error}</span>
    </div>
  )
}

export default Input