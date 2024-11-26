import React, { useState } from "react";
import {  Routes, Route, Link, useNavigate } from "react-router-dom";
import './stylefoot.css';

function Navbar() {
  const [responsive, setResponsive] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <img src="pictures/cmc.png" className="cmc" alt="Logo" />
        CMCFOOT
      </h2>

      <button
        onClick={() => setResponsive(!responsive)}
        className="icone"
        aria-label="Toggle navigation"
      >
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={responsive ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

      <ul className={`ulnav ${responsive ? "show" : ""}`}>
        <li>
          <Link to="/" id="link">Accueil</Link>
        </li>
        <li>
          <Link to="/about" id="link">Qui sommes-nous</Link>
        </li>
        <li>
          <a href="mailto:abdessamadaitakkanalla08@gmail.com" className="mail" id="mail">
            Contactez-nous
          </a>
        </li>
        <li>
          <Link to="/connexion" className="btnnav">
            Se connecter
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Acceuil() {
  const navigate = useNavigate();

  return (
    <div className="acceuil">
      <div>
        <img src="pictures/maroc.webp" className="image1" alt="Accueil" />
      </div>
      <div className="parag">
        <h1 className="titre1">LET'S TAKE SOME GOALS</h1>
        <p className="pagraphe1">
          Votre application à votre façon ! Gérez vos réservations de football
          avec cette application et allégez votre charge de travail. N'hésitez
          pas à nous contacter, nous serons ravis de vous aider à démarrer la
          gestion de votre terrain de football à CMC.
        </p>
        <button className="btnnav" onClick={() => navigate("/connexion")}>
          Se connecter
        </button>
      </div>
    </div>
  );
}

function Connexion() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="connexion">
      <div className="form">
        <h1 className="contact">CONNEXION</h1>
        <h5>Bienvenue, entrez vos informations</h5>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="*****************"
              className="input"
            />
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
                onClick={() => setShowPassword(!showPassword)}
                className="eyes"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </p>
          </div>
          <div>
            <input type="checkbox" name="remember" />
            <label htmlFor="remember" className="remembre">
              Se souvenir de moi
            </label>
            <label htmlFor="forgot">
              <a href="/" className="creer">
                Mot de passe oublié ?
              </a>
            </label>
          </div>
          <input type="submit" className="submit" value="Se connecter" />
          <p>
            Vous n'avez pas de compte ?{" "}
            <a href="/" className="creer">
              Créer un compte
            </a>
          </p>
        </form>
      </div>
      <div>
        <img src="pictures/foot.jpeg" className="image2" alt="Connexion" />
      </div>
    </div>
  );
}


function About() {
  return (
    <div className="about">
      <h1>À propos de nous</h1>
      <p>CMCFOOT est une plateforme innovante conçue pour gérer vos réservations de football facilement et efficacement. Notre mission est de simplifier l’organisation des matchs, de maximiser l’utilisation des terrains et de créer 
        une expérience fluide pour les joueurs et les gestionnaires.</p>
        <ul>
          <li>Planifier vos réservations en quelques clics.
          </li>
          <li>Suivre les disponibilités des terrains en temps réel.
          </li>
          <li>Recevoir des notifications et des rappels pour vos matchs.
          </li>
          <li>Créer une communauté de passionnés de football.
          </li>
</ul>
<p>
Que vous soyez un gestionnaire de terrains ou un amateur
 de football cherchant un espace pour jouer, CMCFOOT est là pour
 répondre à vos besoins et améliorer votre expérience sportive.
</p>
    </div>
  );
}

export default function FootPage1() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </>
  );
}
