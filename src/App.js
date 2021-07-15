import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Greet from './Pages/About/Greet';
import History from './Pages/About/History';
import BusinessPartner from './Pages/About/BusinessPartner';
import Vision from './Pages/About/Vision';
import WayToCome from './Pages/About/WayToCome';
import OrganizeChart from './Pages/About/OrganizeChart';
import Manufacture from './Pages/BusinessDomain/Manufacture';
import ProcessingBusiness from './Pages/BusinessDomain/ProcessingBusiness';
import SecondaryBattery from './Pages/BusinessDomain/SecondaryBattery';
import Measure from './Pages/FacilityStatus/Measure';
import Processing from './Pages/FacilityStatus/Processing';
import Production from './Pages/FacilityStatus/Production';

// import Fee2 from './pages/Fee/Fee2';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/greet" component={Greet}  />
        <Route path="/vision" component={Vision}  />
        <Route path="/history" component={History}  />
        <Route path="/business-partner" component={BusinessPartner}  />
        <Route path="/way-to-come" component={WayToCome}  />
        <Route path="/organize-chart" component={OrganizeChart}  />
        <Route path="/manufacture" component={Manufacture}  />
        <Route path="/processing-business" component={ProcessingBusiness}  />
        <Route path="/secondary-battery" component={SecondaryBattery}  />
        <Route path="/Measure" component={Measure}  />
        <Route path="/Processing" component={Processing}  />
        <Route path="/Production" component={Production}  />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
