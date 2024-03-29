import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Triage from './Triage'
import ConsentLetter from './ConsentLetter'
import Main from './Main'
import Prescription from './Prescription'
import LabCabinet from './LabCabinet'
import ClinicHistory from './ClinicHistory'
import ConsentLetterView from './ConsentLetterView/ConsentLetterView'
import ConsentLetterPDF from './ConsentLetterPDF'

const Routes: React.FC = () => {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Login} />
            <Main>
               <Route path="/triage" exact component={Triage} />
               <Route path="/consent" exact component={ConsentLetter} />
               <Route path="/prescription" exact component={Prescription} />
               <Route path="/lab_cabinet" exact component={LabCabinet} />
               <Route path="/clinic_hist" exact component={ClinicHistory} />
               <Route
                  path="/consent_view"
                  exact
                  component={ConsentLetterView}
               />
               <Route path="/consent_pdf" exact component={ConsentLetterPDF} />
            </Main>
         </Switch>
      </Router>
   )
}

export default Routes
