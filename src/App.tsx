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
import Tab1 from "./pages/Tab1/Tab1";
import Tab2 from './pages/Tab2/Tab2';
import Tab3 from './pages/Tab3/Tab3';
import Tab4 from './pages/Tab4/Tab4';
import Tab5 from './pages/Tab5/Tab5';
import Menu from './pages/Menu/Menu';
import Main from './pages/Main/Main';
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
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true} />
          <Route path="/tab4" component={Tab4} exact={true} />
          <Route path="/tab5" component={Tab5} exact={true} />
          <Route path="/Main" component={Main} />
          <Route path="/Gallery" component={Gallery} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon class="fas fa-home"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon class="fas fa-plus"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon class="fas fa-camera"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon class="fas fa-qrcode"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon class="fas fa-info-circle"></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
