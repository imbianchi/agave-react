import { useState } from 'react'
import './style.scss'

const RichInput = ({ onChange, error }) => {
  const [text, setText] = useState('')
  return (
    <div style={{width: '100%'}}>
      <div className='richinput'>
        <p className='placeholder'>
          {text ? '' : <span>Breve descritivo do projeto <span className='smaller'>(max 400 caracteres)</span>*</span>}
        </p>
        <textarea
          onChange={(e) => {
            setText(e.target.value)
            onChange(e)
          }} />
      </div>
      <p className='error'>{error}</p></div>
  )
}

export default RichInput