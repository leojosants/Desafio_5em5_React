// 
import { useState } from 'react'
import { Header } from './components/Header/Header' 
import { Footer } from './components/Footer/Footer'

const App = () => {
  const [name, setName] = useState(`Leonardo Santos`);  
  const [age, setAge] = useState(10);
  const [bg, setBg] = useState('#FF0000');

  const handle20 = () => {
    setAge(20);
  };
  const handle90 = () => {
    setAge(90);
  };

  return(
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      <button onClick={handle20}>Tenho 20 anos</button>
      <button onClick={handle90}>Tenho 90 anos</button>

      {age > 30 && 'Eu sou maior de 30 anos'}

      <Footer />
    </div>
  );
};

export default App;