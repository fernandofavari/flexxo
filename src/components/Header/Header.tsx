import { IonFooter, IonHeader, IonTitle } from '@ionic/react';
import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
    return (

        <IonHeader className="IonHeader">
            <IonTitle className="IonTitleHeader">Projeto Flexxo</IonTitle>
        </IonHeader>

    );
};

export default Header;