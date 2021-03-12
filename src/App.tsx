import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabList from "./pages/TabList/TabList";
import TabForm from './pages/TabForm/TabForm';
import TabInfo from './pages/TabInfo/TabInfo';
import TabPhoto from './pages/TabPhoto/TabPhoto';
import TabCode from './pages/TabCode/TabCode';
import Menu from './pages/SideMenu/SideMenu';
import Information from './pages/Information/Information';
import Gallery from './pages/Gallery/Gallery';
//import Splash from './pages/Splash/Splash';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



/* Theme variables */
import './theme/variables.css';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const App: React.FC = () => (
  
  <IonApp>
    <Menu />
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="menu">

          <Route path="/" render={() => <Redirect to="/TabList" />} exact={true} />
          <Route path="/TabList" component={TabList} exact={true} />
          <Route path="/tabForm" component={TabForm} exact={true} />
          <Route path="/tabInfo" component={TabInfo} exact={true} />
          <Route path="/tabPhoto" component={TabPhoto} exact={true} />
          <Route path="/tabCode" component={TabCode} exact={true} />
          <Route path="/Information" component={Information} />
          <Route path="/Gallery" component={Gallery} />

        </IonRouterOutlet>

        <IonTabBar slot="bottom">

          <IonTabButton tab="tabMain" href="/tabMain">
            <IonIcon class="fas fa-home"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tabForm" href="/tabForm">
            <IonIcon class="fas fa-plus"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tabPhoto" href="/tabPhoto">
            <IonIcon class="fas fa-camera"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tabCode" href="/tabCode">
            <IonIcon class="fas fa-qrcode"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tabInfo" href="/tabInfo">
            <IonIcon class="fas fa-info-circle"></IonIcon>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
