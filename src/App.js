import logo from './logo.svg';
import './App.css';
import Myfunc from './components/myfunccomp';
import { render } from 'react-dom';
import {Greet} from './components/myclasscomp';
import { Message } from './components/myclasscomp';
import if_else from './Conditional_rendering/if_else';
import IfElse from './Conditional_rendering/if_else';
import Elevar from './Conditional_rendering/element_variable';
import Ternop from './Conditional_rendering/ternary_operator';
import Shortcirop from './Conditional_rendering/shortcircuit_operator';
import { Onclickevent } from './Event Handling/onclick';
import {Formonchange} from './Event Handling/onchange';
import { Formonsubmit } from './Event Handling/onsubmit';
import { Onmouse } from './Event Handling/onmouse';
import { Loginpage } from './loginpage';
import { Testnum } from './TestNumber';
import { Card } from './ETP projects/Card_on_webpage';
import { Newspage } from './ETP projects/news_page';
import sampleNews from './ETP projects/sampleNews.json'
function App() {
    
      return(<div>
        {/* <h1>Hi</h1>
      <Myfunc name='ABC'></Myfunc>
      <Greet que='Wassup !'></Greet>
      <Message/> */}
      {/* <IfElse/> */}
      {/* <Elevar/> */}
      {/* <Ternop/> */}
      {/* <Shortcirop/> */}
      {/* <Onclickevent/> */}
      {/* <Formonchange/> */}
      {/* <Formonsubmit/> */}
      {/* <Onmouse/> */}
      {/* <Loginpage/> */}
      {/* <Testnum/> */}
      {/* <Card/> */}
      <Newspage inputdata={sampleNews}/>
      </div>
      ) 
    
}

export default App;
