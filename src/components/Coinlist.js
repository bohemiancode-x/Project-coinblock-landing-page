import './Coinlist.css'


export default function Coinlist({ coins }) {


  return (
    <div className='coin-list'>
      <ul>
        
        {coins.map((i,n) => {
            return <li key={i.id}>
                    <div className='coin' >
                        {n+1}.<img src={i.image} />
                        <p>{i.name}</p>
                        <p>({i.symbol.toUpperCase()})</p>
                        <div className='figures'>
                            <p>${i.current_price}</p>
                            <p>${i.market_cap}</p>
                        </div>
                    </div>
                    <span></span>
                </li>
        })}
       </ul>
    </div>
  )
}
