import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  const company = {
    name:"Squid Games",
    description: "© copyright all rights reserved"
  }

  return (
    <>
    <Header/>
    <Banner>
      Enter Game
    </Banner>

    <Footer company={company}/>
    </>
  );
}

export default App;
