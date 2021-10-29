import './style.scss'
const File = ({ onChange, error='' }) => {
  return (
    <><input type='file' onChange={onChange} className='file' />
      <p className='file-error'>{error}</p></>
  )
}

export default File