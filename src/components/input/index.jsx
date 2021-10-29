import './style.scss'

const Input = ({ placeholder, type = 'text', error = '', onChange }) => {

  return (
    <div className={`input ${error ? 'error' : ''}`}>
      <input type={type} placeholder={placeholder} onChange={onChange} />
      <span className='error'>{error}</span>
    </div>
  )
}

export default Input