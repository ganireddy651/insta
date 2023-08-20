/* eslint-disable import/no-extraneous-dependencies */
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiMenu} from 'react-icons/fi'

import './index.css'

const HamburgerIcon = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button className="hamburger-icon" type="button">
            <FiMenu />
          </button>
        }
        position="bottom center"
      >
        <div className="nav-items">
          <Link to="/" className="link">
            <span className="item">Home</span>
          </Link>
          <Link to="/my-profile" className="link">
            <span className="item">Profile</span>
          </Link>
          <button onClick={onClickLogout} className="logout-btn" type="button">
            Logout
          </button>
        </div>
      </Popup>
    </div>
  )
}
export default withRouter(HamburgerIcon)
