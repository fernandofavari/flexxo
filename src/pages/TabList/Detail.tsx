import React from 'react';
import { IonContent, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../../components/Footer/Footer';

import './Detail.css'

const TabInfo: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar >
                <IonMenuButton slot="start"></IonMenuButton>
                <IonTitle>Detalhes</IonTitle>
            </IonToolbar>

            <IonContent>
                <IonList>
                </IonList>
            </IonContent>

            <Footer />

        </IonPage>
    );
};

export default TabInfo;