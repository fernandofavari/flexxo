import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {firebaseDatabase} from '.../../firebaseConfig';

import './Tab1.css';

export const Tab1: React.FC = () => {

  firebaseDatabase.database().ref('Usuario').on('value', function (snapshot : any) {
    console.log(snapshot.val());

  });

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">

        </IonHeader>

        <IonList>
          <IonItem>
            <IonLabel>Nome: </IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  )
}


/*
const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">

        </IonHeader>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Pesquisar"></IonSearchbar>

        <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
*/
export default Tab1;