import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Overlay from './components/layout/Overlay'
import { ActiveProvider } from './components/layout/ActiveContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/main/Main'
import About from './components/about/About'

function App() {
    return (
        <Router>
            <ActiveProvider>
                <div className="wrapper">
                    <Navbar/>
                    <div id="content">
                        <Overlay/>
                        <Header/>
                        <main className="ml-sm-auto col-12 pt-3 px-4">
                            <Switch>
                                <Route path="/" exact component={Main}/>
                                <Route path="/about" component={About}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </ActiveProvider>
        </Router>
    );
}

export default App;
