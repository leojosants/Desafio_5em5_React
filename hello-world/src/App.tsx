// 
import { Header } from './components/Header/Header' 
import { Footer } from './components/Footer/Footer'

const App = () => {
  let name = `Leonardo Santos`;
  let age = 38;

  const handleClick = () => {
    alert('Clicou na função!');
  };

  return(
    <div>
      <Header name={name} age={age} />

      <button onClick={handleClick}>Clique aqui</button>

      <Footer />
    </div>
  );
};

export default App;