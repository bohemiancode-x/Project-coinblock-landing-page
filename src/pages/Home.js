import './Home.css'
import Rocket from '../assets/rocket.jpg'
import Coinlist from '../components/Coinlist'
import { useFetch } from '../hooks/useFetch'


export default function Home() {
    const { data, isPending, error} = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  return (
    <div className='home'>
        <div className="hero-page">
            <img className='rocket' src={Rocket} alt="hero image" />
            <div>
                <h2>Digital assets <br /> in your hands...</h2>
                <p>Get real-time prices of your crypto assets on the go. <br />  Connected to the fastest API services with rocket-speed delivery.</p>
            </div>
        </div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading..</p>}
        {data && <Coinlist coins={data} />}
    </div>
  )
}
