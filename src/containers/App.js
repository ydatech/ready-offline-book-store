import React, { Component } from 'react';

// Themeing/Styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './styles/theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import './styles/App.css';

//react router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//containers or components
import Home from './Home';
import OrderHistory from './OrderHistory';
import Admin from './Admin';
import Navbar from './Navbar';
import Checkout from './Checkout';
import NotFound from './NotFound';
// Tap plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {
  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Router>
          <div className="App">
            <Route component={Navbar} />

            <div className="AppContent">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/order-history" component={OrderHistory} />
                <Route path="/checkout" component={Checkout} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
