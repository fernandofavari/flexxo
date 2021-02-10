import React from 'react';
import { IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import Footer from '../../components/Footer/Footer';

import './Main.css'

const Main: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="./../Tab3" />
                </IonButtons>
                <IonTitle>Dados Principais</IonTitle>
            </IonToolbar>

            <IonContent >
                <p className="IonContentTab3">
                    <b>Nome:</b> Fernando José de Favari Jr.<br />
                    <b>Telefone:</b> (16) 3023.5554<br />
                    <b>Celular:</b> (16) 98162.1370<br />
                    <b>Endereço:</b> Rua Itapura, 12 apt° 103<br />
                    <b>Bairro:</b> Jd. Paulista<br />
                    <b>Cidade:</b> Ribeirão Preto<br />
                    <b>UF:</b> São Paulo<br />
                    <b>CEP:</b> 14090-082<br />
                </p>
            </IonContent>

            <Footer />

        </IonPage>
    );
};

export default Main;