import renderer from './renderer'
import Countdown from 'react-countdown';

function App() {

  const date = new Date(); 


  return (
    <div className="container-outer">
     <div className="container">
        <div className="logo-container">
            <img className="logo" src="assets/Ellipse 90.svg" alt="logo"/>
            <p>SWIRGE FINANCE TOKEN</p>
        </div>
        <div className="details">
            <p className="info">Countdown to Swirge finance token launch</p>
            <p className="datetime"><span><img src="assets/Calandarcalender_logo.svg" alt="calender"/></span>29th April, 2021 | 04:00pm UTC +1</p>
        </div>
        <Countdown 
          date={Date.now() + (Date.parse("Tue Apr 29 2021 16:00:00 GMT+0100 ") - Date.parse(date.toUTCString()))}
          renderer={renderer}
        />
    </div>
  </div>
  );
}

export default App;
