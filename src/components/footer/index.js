
import './style.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-links'>
                <a href="https://www.instagram.com/agavecasa/" target="_blank">
                    <img src='/assets/instagram.png' />
                </a>
                <a href="https://br.pinterest.com/agavecasaa/_created/" target="_blank">
                    <img src='/assets/icon.png' />
                </a>
                <a href="https://www.mgtour360.com/tour/agave-casa/" target="_blank">
                    <img src='/assets/map.png' />
                </a>
                <a href="https://api.whatsapp.com/send?phone=554433460667&text=Ol%C3%A1%2C%20vim%20do%20seu%20link%20Premio%20Agave" target="_blank">
                    <img src='/assets/whatsapp.png' />
                </a>
            </div>
            <p className='title'>DESCUBRA
                <a href="https://www.instagram.com/agavecasa/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                    <b> @AGAVECASA</b>
                </a>
            </p>
        </div >
    )
}

export default Footer