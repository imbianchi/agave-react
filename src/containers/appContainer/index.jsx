import { Footer } from "../../components"
import Background from "../../components/background"
import './style.scss'
const AppContainer = (props) => {
  return (
    <div className='app'>
      <Background />

      {props.children}
      <div className='contact'>
        {props.showText ? <p>INSCRIÇÕES: 05/11/21 A 05/03/22.</p> : <></>}
        <a href="/premioagave">
          <img src='/assets/logo-black.png' />
        </a>
      </div>
      <Footer />

    </div>
  )
}

export default AppContainer