import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuButton } from '@ionic/react';
import "./Menu.css";

export const Menu: React.FC = () => (
  <>
    <IonMenu content-id="menu" type="overlay" side="start">
      <IonHeader>
        <IonToolbar className="IonToolbar-Menu">
          <IonTitle> Fernando </IonTitle>          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonItem routerLink="../Main/Main.tsx"><IonIcon class="fas fa-info-circle"></IonIcon>&nbsp;<IonLabel>Principal</IonLabel></IonItem>                  
          <IonItem routerLink="../Gallery/Gallery.tsx"><IonIcon class="fas fa-image"></IonIcon>&nbsp;<IonLabel>Galeria</IonLabel></IonItem>                  
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);
export default Menu;