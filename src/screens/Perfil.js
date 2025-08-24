import React, { useEffect, useState } from 'react';
import styles from './Perfil.module.css';
import { auth, db } from '../firebase/connection';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [infoPerfil, setInfoPerfil] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUsuario(user);
        // Pega dados do Firestore, se existir
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setInfoPerfil(docSnap.data());
        }
      } else {
        navigate('/login'); // Redireciona para login se não estiver logado
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/'); // volta para página inicial
  };

  if (!usuario || !infoPerfil) return <p>Carregando informações...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meu Perfil</h1>
      <div className={styles.card}>
        <p><strong>Nome:</strong> {infoPerfil.nome || usuario.displayName}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Contato:</strong> {infoPerfil.contato || 'Não informado'}</p>
        <p><strong>Data de Nascimento:</strong> {infoPerfil.dataNascimento || 'Não informado'}</p>
        <button className={styles.logoutBtn} onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
}

export default Perfil;
