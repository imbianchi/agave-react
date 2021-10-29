import { useState } from 'react'
import './style.scss'
const Checkbox = ({ onChange, label, error = 'df' }) => {

  const [checked, setChecked] = useState(false)

  return (
    <div className='checkbox-container'>
      <p className='check-error'>{error}</p>
      <div style={{ display: 'flex' }}><div className={`checkbox ${checked ? 'checked' : ''}`}
        onClick={() => {
          setChecked((checked) => {
            onChange(!checked)
            return !checked
          })
        }}>{checked ? '✓' : ''}
      </div>
        <div>
          <p className='text'>{label}</p>
        </div></div>
    </div>
  )
}

export default Checkbox