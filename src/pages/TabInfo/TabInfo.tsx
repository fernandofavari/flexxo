import React from 'react';
import { IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../../components/Footer/Footer';

import './TabInfo.css'

const TabInfo: React.FC = () => {
    return (
        <IonPage>            
            <IonToolbar >
                <IonMenuButton slot="start"></IonMenuButton>                            
                <IonTitle>Informativo</IonTitle>
            </IonToolbar>           

            <IonContent>
                <div className="IonContentTab3">Este app é o resultado do curso de Ionic 5 ministrado pelo professor Jardel na escola Flexxo.</div>
            </IonContent>

            <Footer />

        </IonPage>
    );
};

export default TabInfo;
