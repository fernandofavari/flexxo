import React from 'react';
import { IonBackButton, IonButtons, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Gallery.css';

const Gallery: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="./../TabInfo" />
                </IonButtons>
                <IonTitle>Galeria de Imagens</IonTitle>
            </IonToolbar>
            

            <Footer />

        </IonPage>
    );
};

export default Gallery;
