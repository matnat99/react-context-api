import { Link } from "react-router-dom";
import { useAlertContext } from "../contexts/AlertContext";
import { useEffect } from "react";

export default function HomePage() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message: "Chiama ora! Riceverai una ricetta unica in omaggio",
    });
  }, [setAlertData]);

  return (
    <>
      <section className="hero">
        <h1>Benvenuto nel nostro angolo di cucina!</h1>
        <p>
          Scopri ricette semplici e gustose per ogni occasione, da dolci
          irresistibili a piatti salati che conquisteranno il tuo palato.
          <br />
          Unisciti a noi per esplorare il mondo della cucina fatta con amore e
          passione!
        </p>
      </section>
      <section className="featured-recipes">
        <h2>Ricette in evidenza</h2>
        <p>
          Esplora i piatti più recenti e scegli la tua prossima preparazione.
          <br />
          Ogni ricetta è pensata per portare un po' di felicità in cucina!
        </p>
        <Link to="/feed">
          <button>Scopri tutte le ricette</button>
        </Link>
      </section>
    </>
  );
}
