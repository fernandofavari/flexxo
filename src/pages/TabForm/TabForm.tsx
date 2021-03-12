import React, { useState } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonToast, IonButton } from '@ionic/react';
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import firebase from '../../firebaseConfig';
import './TabForm.css';

const TabForm: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [cell, setCell] = useState('');

  const { register, handleSubmit, control, watch, errors } = useForm();

  const onSubmit = () => {
    let Create = firebase.database().ref('usuario');//"usuario é o nome da tabela"

    let data = {
      name, email, cpf, cell,
    };

    Create.push(data);

  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader className="IonHeaderTab2">
          <IonTitle size="large" className="IonTitleTab2">Formulário</IonTitle>
        </IonHeader>

        <form onSubmit={handleSubmit(onSubmit)}>

          <IonList>

            <label className="input">Nome</label>
            <input className="input" name="name" placeholder="Nome" ref={register({ required: true, maxLength: 100 })} onInput={(e: any) => setName(e.currentTarget.value)} />
            {errors.name && <p>Nome Obrigatório</p>}

            <label className="input">E-mail</label>
            <input className="input" name="email" placeholder="E-mail" ref={register({ required: true, maxLength: 100 })} onInput={(e: any) => setEmail(e.currentTarget.value)} />
            {errors.email && <p>E-mail Obrigatório</p>}

            <label className="input">CPF</label>
            <Controller
              as={InputMask}
              control={control}
              mask="999.999.999-99"
              name="cpf"
              className="input"
              placeholder="999.999.999-99"
              rules={{ required: true }}
              onInput={(e: any) => setCPF(e.currentTarget.value)}
            />
            {errors.cpf && <p>CPF Obrigatório</p>}

            <label className="input">Celular</label>

            <Controller
              as={InputMask}
              control={control}
              mask="(99) 9999-99999"
              name="cell"
              className="input"
              placeholder="(99)99999-9999"
              rules={{ required: true }}
              onInput={(e: any) => setCell(e.currentTarget.value)}
            />
            {errors.cell && <p>Celular Obrigatório</p>}

            <input type="submit" value="Cadastrar" className="btnSubmit" />

          </IonList>

        </form>

      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default TabForm;
