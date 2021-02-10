import { IonFooter, IonHeader, IonTitle } from '@ionic/react';
import React from 'react';
import './Footer.css';



export const Footer: React.FC = () => {
    return (

        <IonFooter className="IonFooter">            
            <IonTitle className="IonTitleFooter">Versão 1.0</IonTitle>
        </IonFooter>

    );
};

export default Footer;
