import { useState } from 'react'
import './style.scss'
const Checkbox = ({ onChange, label, error = 'df', link}) => {

  const [checked, setChecked] = useState(false)

  return (
    <div className='checkbox-container'>
      <p className='check-error'>{error}</p>
      <div style={{ display: 'flex', alignItems: 'center' }}><div className={`checkbox ${checked ? 'checked' : ''}`}
        onClick={() => {
          setChecked((checked) => {
            onChange(!checked)
            return !checked
          })
        }}>{checked ? '✓' : ''}
      </div>
        <div>
          <p className='text'>{label}
          {
            link && <a href="https://agavecasa.com.br/premioagave/rule/" target="_blank" rel="noreferrer noopener">neste link</a>
          }
          </p>
        </div></div>
    </div>
  )
}

export default Checkbox