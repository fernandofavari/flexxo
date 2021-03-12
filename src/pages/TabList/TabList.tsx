import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import firebase from '../../firebaseConfig';

import './TabList.css';

export const TabMain: React.FC = () => {

  const [list, setList] = useState(["name", "email","cpf", "cell"]);

  useEffect(() => {
    const read = firebase.database().ref('usuario');
    read.on('value', (snapshot) => {

      const data = snapshot.val();
      const list = [];

      for (let id in data) {
        list.push(data[id]);
      }

      console.log(data);
      setList(list);   

    });
  }, []);


  return (
    <>
      <Header />
        <IonContent fullscreen>
          <IonList>
            <IonLabel>
              {list.map((item: any) => (
                <>
                  <h1>Nome: {item.name}</h1>
                  <h1>Email: {item.email}</h1>
                </>
              ))}
            </IonLabel>
          </IonList>
        </IonContent>
        <Footer />
    </>
  );

  /*const query = firebase.database().ref("usuario").orderByKey();
  query.once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (data) {
        var name = data.val().name;
        console.log(name);
        
      });
    });
  return (
    <>
      <IonPage>
        <Header />
        <IonContent fullscreen>
          <IonList>
            <IonLabel>
              {user.map((name) => (
                <IonItem>Nome: {name}</IonItem>
              ))}

            </IonLabel>
          </IonList>
        </IonContent>
        <Footer />
      </IonPage>
    </>
  )*/
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
export default TabMain;