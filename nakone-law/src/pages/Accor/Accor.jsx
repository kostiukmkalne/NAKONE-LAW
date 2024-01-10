import './Accor.css';

const Accor = () => {
  return (
    <div className="wrraper">
      <div className="accord">
        {data.map((item, i) => (
          <div className="item">
            <div className="title">
              <h2>{item.qiestion}</h2>
            </div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Accor;