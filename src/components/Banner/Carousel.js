
import React, {Component} from 'react';
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousel.css'




export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [],
    };
}
 getData (){
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24`, {})
        .then(res => {
                const data = res.data
              const img = data.map(coin => 
                 
               <div className='carouselItem'>
                <img src={coin.image} alt={coin.name} height="80" style={{ marginBottom: 10}} />
                <br></br>

                <span style={{ textAlign:"center"}}>
                {coin.symbol}
                <br></br>
                &nbsp;
                
                <span
                  style={{
                    color: (coin.price_change_percentage_24h >= 0) > 0 ? "rgb(14, 203, 129)" : "red",
                    fontWeight: 500, textAlign: "center"
                  }}
                >
                <br></br>
                
                 {coin.price_change_percentage_24h >= 0 && "+"}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
                
              </span>
              </div>
              )
              
              
              this.setState({
                galleryItems: img
              })
            }).catch((error) => {
                console.log(error)
            })
            
  }
  responsive = {
    0: {
        items: 2,
      },
      512: {
        items: 4,
      },
  }
  componentDidMount() {
   this.getData()
}
  
  render() {
    return (
      <>


       
      
    <div className='carousel'>
      
        <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={1000}
        animationDuration={1500}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        infinite={true}
        mouseTrackingEnabled={true}
        disableDotsControls={true}
        disableAutoPlayOnAction={true}
        disableButtonsControls={true}
      />
    
    </div>
    </>
    )
  }
}

