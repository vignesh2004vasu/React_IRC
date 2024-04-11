
import './App.css';
import { Store, Store2 } from './Redux/Store';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Inline from './components/Inline';
import { Provider } from 'react-redux';
import Theme from './components/Theme';
import CardB from './components/CardB';
import PropsData from './components/PropsData';
import Form from './components/Form';

const dynamicData = new Date().toLocaleString();
function App() {
  return (
    <div>
   
      {/* <ErrorBoundary>
        <Hero heroName={'Batman'}/>
      </ErrorBoundary>
   
      <ErrorBoundary>
        <Hero heroName={'Joker'}/>
      </ErrorBoundary> */}

      {/* <PropsData staticData={'st data'} dynamicData={dynamicData}/> */}

      {/* <CardB/> */}
      {/* <Form/> */}
      <Provider store={Store}>
      <Counter/>
      
      </Provider>
      <Provider store={Store2}>
      <Theme/>
      </Provider>
    </div>
  );
}

export default App;
