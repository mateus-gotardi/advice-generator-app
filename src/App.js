import { useState, useEffect } from "react";
import getAdvice from "./services/getAdvice";
import iconDice from './images/icon-dice.svg'
import patternDivider from './images/pattern-divider-desktop.svg'
import patternDividerMobile from './images/pattern-divider-mobile.svg'

function App() {
  let w = window.innerWidth;
  const [adviceText, setAdviceText] = useState('Loading advice, please wait...');
  const [adviceID, setAdviceID] = useState('00');

  useEffect(() => {
    fetchAdvice()
  }, [])
  const fetchAdvice = async () => {
    const { slip: { id, advice } } = await getAdvice()
    setAdviceID(id)
    setAdviceText(advice)
  }
  return (
    <div className="general">
      <section className="card">
        <h3>ADVICE #{adviceID}</h3>
        <h2>
          "{adviceText}"
        </h2>
        {w>375? <img src={patternDivider} className="divider" alt='divider'></img>:<img alt='divider' src={patternDividerMobile} className="divider"></img>}
        <button className="btn" onClick={fetchAdvice}><img alt='dice icon' src={iconDice}></img></button>
      </section>
    </div>
  );
}

export default App;
