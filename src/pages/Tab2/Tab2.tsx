import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        
      </IonContent>
      <Footer /> 
    </IonPage>
  );
};

export default Tab2;
