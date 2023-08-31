// import logo from './logo.svg';
import './App.css';
import { About } from './Portfoliofolder/About/About';
import { Certificate } from './Portfoliofolder/Certificate/Certificate';
import { Contact } from './Portfoliofolder/Contacts/Contacts';
import { Header } from './Portfoliofolder/Home/Home';
import { Navbar } from './Portfoliofolder/Nav/Nav';
import { Skills } from './Portfoliofolder/Skills/Skills';
// import { Home } from './components/Home/Home';
// import { Header } from './components/navbar/nav';
// import {About} from './components/About/About';
 

function App() {
  return (
    <>

    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Certificate/>
    <Contact/>
    
{/* <Header/> 
<Home/>
<About/> */}
   </>
  );
}

export default App;
