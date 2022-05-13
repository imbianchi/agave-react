import Background from "../../components/background"
import './style.scss'
const AppContainer = (props) => {
  return (
    <div className='app'>
      <Background />

      {props.children}
      <div className='contact'>
        <p style={{ marginBottom: 0 }}>INSCRIÇÕES: 10/05/22 a 14/10/22.</p>
        <a href="/premioagave">
          <img src='/assets/logo-black.png' />
        </a>
      </div>

    </div>
  )
}

export default AppContainer