import Background from "../../components/background"
import './style.scss'
const AppContainer = (props) => {
  return (
    <div className='app'>
      <Background />

      {props.children}
      <div className='contact'>
        <p style={{ marginBottom: 0 }}>INSCRIÇÕES: 08/11/21 A 08/03/22.</p>
        <a href="/premioagave">
          <img src='/assets/logo-black.png' />
        </a>
      </div>

    </div>
  )
}

export default AppContainer