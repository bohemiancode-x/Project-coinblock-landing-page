import './footer.css'



export default function footer() {
  return (
    <section className="footer">
            <div className="social">
                <a href="#"><img src='./twitter-brands.svg' alt="" />
                </a>
                <a href="#"><img src='./reddit-brands.svg' alt="" /></a>
                <a href="#"><img src='./instagram-brands.svg' alt="" /></a>
                <a href="#"><img src='./discord-brands.svg' alt="" /></a>    
                <a href="#"><img src='./github-brands.svg' alt="" /></a> 
            </div>

            <ul className="list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Services</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Terms</a>
                </li>
                <li>
                <a href="#">Privacy Policy</a>    
                </li>    
            </ul>  
            <p className="copyright">
                Coinblock &#169;    
            </p>  
        </section>
  )
}
