import pad_with_zeros  from './functions'
const renderer = ({ days , hours, minutes, seconds, completed }) => {
 
  return (completed ?
    <div> Completed </div> : <div className="timer">
      <div>
        <div className="time-part">{ pad_with_zeros(days,2)}</div>
        <div>Days</div>
      </div>
      <div className="space">:</div>
      <div>
        <div className="time-part">{pad_with_zeros(hours,2)}</div>
        <div>Hours</div>
      </div>
      <div className="space">:</div>
      <div>
        <div className="time-part">{pad_with_zeros(minutes,2)}</div>
        <div>Minutes</div>
      </div>
      <div className="space">:</div>
      <div>
        <div className="time-part">{pad_with_zeros(seconds,2)}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
};


export default renderer;