import { useState } from 'react'
import './style.scss'

const RichInput = ({ onChange, error }) => {
  const [text, setText] = useState('')
  return (
    <div style={{ width: '100%' }}>
      <div className='richinput'>
        <textarea
          placeholder="breve descritivo do projeto (max 400 caracteres)*"
          maxLength={400}
          onChange={(e) => {
            setText(e.target.value)
            onChange(e)
          }} />
      </div>
      <p className='error'>{error}</p></div>
  )
}

export default RichInput