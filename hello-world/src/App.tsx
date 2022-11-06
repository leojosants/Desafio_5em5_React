// 
import { useState } from 'react'
import { Header } from './components/Header/Header' 
import { Footer } from './components/Footer/Footer'

const App = () => {
  const [name, setName] = useState(`Leonardo Santos`);  
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState('#FF0000');

  const [list, setList] = useState([
    'JavaScript',
    'react',
    'HTML',
  ]);  

  const handle20 = () => {
    setAge(20);
    setBg('#00FF00');
  };
  const handle90 = () => {
    setAge(90);
    setBg('#FF0000');
  };

  return(
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      {
        age === 90 && 
        <button onClick={handle20}>Tenho 20 anos</button>
      }

      {
        age === 20 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      <hr />

      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>

      <Footer />
    </div>
  );
};

export default App;