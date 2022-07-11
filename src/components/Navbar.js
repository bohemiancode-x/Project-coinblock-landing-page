import './Navbar.css'

export default function Navbar() {

  const opennav = () => {
    document.querySelector('.mobile-nav').style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }

  const closenav = () => {
    document.querySelector('.mobile-nav').style.display = 'none'
    document.body.style.overflow = 'auto'
  }


  return (
    <div className='nav'>
        <span> COIN
         <img className='logo' src="./logo-colored.png" alt="logo" />LOCK
        </span>
        <ul>
          <li>Services</li>
          <li>About</li>
          <li>Newsletter</li>
        </ul>
        <img onClick={opennav} className='hamburger' src="./hamburger.svg" alt="" />

        <div className="mobile-nav">
          <span onClick={closenav}>x</span>
          <li>Services</li>
          <li>About</li>
          <li>Newsletter</li>
        </div>
    </div>
  )
}
