import Store from './Utility/contextstore/store';
import Footer from './Components/Footer/footer';
import PageRoutes from './Utility/MyRoutes/PageRoutes';
import './App.css'

function App() {
  return (
    <div className="App">
    

      <Store>
      <PageRoutes/>
      </Store>

      <Footer/>
      
    </div>
  );
}

export default App;
