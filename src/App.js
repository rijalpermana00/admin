import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { ActiveProvider } from './components/ActiveContext'

function App() {
    return (
        <ActiveProvider>
            <div className="wrapper">
                <Navbar/>
                <div id="content">
                    <Header/>
                </div>
            </div>
        </ActiveProvider>
    );
}

export default App;
