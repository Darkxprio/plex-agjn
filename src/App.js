import "./App.css";
import tomate4 from "./img/tomate-4.jpg";
import tomate3 from "./img/tomates-3.jpg";
import tomate2 from "./img/tomates-2.jpg";
import tomate1 from "./img/tomates-1.jpg";
import cri5 from "./img/cri-5.jpg";
import cri4 from "./img/cri-4.jpg";
import cri3 from "./img/cri-3.jpg";
import cri2 from "./img/cri-2.jpg";
import cri1 from "./img/cri1.jpeg";
import grem2 from "./img/Gremlins-2.jpg";
import grem1 from "./img/Gremlins.jpg";
import vicFrank from "./img/victor-frankestein.webp";
import sombras from "./img/cincuenta-sombras-liberadas.jpeg";
import avatar2 from "./img/avatar-2.jpg";
import barbie from "./img/barbie.jpg";
import caballeros from "./img/caballeros.webp";
import caroline from "./img/caroline.jpg";
import condena from "./img/condena.jpg";
import gato1 from "./img/El-gato-botas.jpg";
import elementos from "./img/elementos.webp";
import eligeMuere from "./img/Elige-o-Muere.jpg";
import espiral from "./img/espiral.jpg";
import exorcistaPapa from "./img/exorcista-papa.webp";
import fiebreSabado from "./img/fiebre-sabado-noche.webp";
import flaming from "./img/flaming-hot.jpeg";
import guardianes1 from "./img/guardianes-1.webp";
import guardianes2 from "./img/guardianes-2.jpg";
import guardianes3 from "./img/guardianes-3.webp";
import indiana5 from "./img/Indiana-5.jpg";
import insidiousPuerta from "./img/Insidous-La-puerta-roja.jpg";
import interestelar from "./img/interstellar.jpg";
import it from "./img/it.jpg";
import it2 from "./img/it-2.webp";
import jigsawJuegoContinue from "./img/Jigsaw-juego-continua.webp";
import johnWick4 from "./img/John-wick-4.jpg";
import ballena from "./img/La-ballena.webp";
import momia2 from "./img/La-momia-2.jpg";
import odisea from "./img/La-odisea.jpeg";
import sirenita from "./img/la_sirenita.jpg";
import travesurasSirena from "./img/Las-travesuras-de-sirena.webp";
import martyrs from "./img/Martyrs.jpg";
import megan from "./img/Megan.jpg";
import mejorImposible from "./img/Mejor_imposible.jpg";
import misionImposibleSentencia from "./img/Misión-Imposible-Sentencia-Mortal.jpg";
import mujerBonita from "./img/Mujer-Bonita.webp";
import openheimmer from "./img/Oppenheimer.webp";
import Palmer from "./img/Palmer.webp";
import quePasóAyer1 from "./img/que-paso-ayer-1.jpg";
import rapidos9 from "./img/Rapidos-Furiosos-9.jpg";
import rapidos10 from "./img/Rapidos-Furiosos-10.jpeg";
import rubi from "./img/Ruby_aventuras_de_una_kraken_adolescente.jpg";
import saw3d from "./img/Saw-3D.jpg";
import scaryMovie1 from "./img/Scary-Movie-1.webp";
import scream6 from "./img/scream-6.jpeg";
import sing2 from "./img/Sing-2.jpg";
import sonic2 from "./img/sonic-2.jpg";
import sonidosLibertad from "./img/Sonidos-Libertad.webp";
import spidermanAcross from "./img/Spiderman-Across-the-verse.jpg";
import superMario from "./img/Super-Mario-Bross.jpeg";
import slamDunk from "./img/The-Slam-Dunk.jpg";
import thorAmorTrueno from "./img/Thor-Amor-Trueno.jpeg";
import titanic from "./img/Titanic.jpeg";
import titanic2 from "./img/Titanic-2.jpg";
import todoTiempo from "./img/Todo-tiempo.webp";
import transformersDespertar from "./img/Transformers_El_despertar_de_las_bestias.jpg";
import gatoCallejeroBob from "./img/El-gato-botas.jpg";
import vecinoGruñon from "./img/Un-vecino-grunon-Poster.webp";
import nocheRoxbury from "./img/Una-noche-Roxbury.jpg";
import wifeLike from "./img/WifeLike.jpg";
import meg2 from "./img/meg-2.jpg";
import { useEffect, useState } from "react";

function App() {
  const movies = [
    {
      name: "La venganza de los tomates asesinos 4",
      link: tomate4,
    },
    {
      name: "La venganza de los tomates asesinos 3",
      link: tomate3,
    },
    {
      name: "La venganza de los tomates asesinos 2",
      link: tomate2,
    },
    {
      name: "La venganza de los tomates asesinos 1",
      link: tomate1,
    },
    {
      name: "Critters 5",
      link: cri5,
    },
    {
      name: "Critters 4",
      link: cri4,
    },
    {
      name: "Critters 3",
      link: cri3,
    },
    {
      name: "Critters 2",
      link: cri2,
    },
    {
      name: "Critters 1",
      link: cri1,
    },
    {
      name: "Gremlins 2",
      link: grem2,
    },
    {
      name: "Gremlins 1",
      link: grem1,
    },
    {
      name: "Victor Frankestein",
      link: vicFrank,
    },
    {
      name: "Megalodón 2",
      link: meg2,
    },
    {
      name: "Cincuenta sombras liberadas",
      link: sombras,
    },
    { name: "Avatar 2", link: avatar2 },
    { name: "Barbie", link: barbie },
    { name: "Caballeros del Zodiaco", link: caballeros },
    { name: "Caroline", link: caroline },
    { name: "Condena Brutal", link: condena },
    { name: "El gato con botas", link: gato1 },
    { name: "Elementos", link: elementos },
    { name: "Elige o Muere", link: eligeMuere },
    { name: "Espiral: El juego del miedo", link: espiral },
    { name: "Exorcista del papa", link: exorcistaPapa },
    { name: "Fiebre de sábado por la noche", link: fiebreSabado },
    { name: "Flaming Hot", link: flaming },
    { name: "Guardianes de la Galaxia 1", link: guardianes1 },
    { name: "Guardianes de la Galaxia 2", link: guardianes2 },
    { name: "Guardianes de la Galaxia 3", link: guardianes3 },
    { name: "Indiana Jones 5", link: indiana5 },
    { name: "Insidous: La puerta roja", link: insidiousPuerta },
    { name: "Interestelar", link: interestelar },
    { name: "It", link: it },
    { name: "It 2", link: it2 },
    { name: "Jigsaw: El juego continua", link: jigsawJuegoContinue },
    { name: "John Wick 4", link: johnWick4 },
    { name: "La ballena", link: ballena },
    { name: "La momia 2", link: momia2 },
    { name: "La Odisea", link: odisea },
    { name: "La Sirenita", link: sirenita },
    { name: "Las travesuras de una sirena", link: travesurasSirena },
    { name: "Martyrs", link: martyrs },
    { name: "Megan", link: megan },
    { name: "Mejor Imposible", link: mejorImposible },
    {
      name: "Misión Imposible: Sentencia Mortal",
      link: misionImposibleSentencia,
    },
    { name: "Mujer Bonita", link: mujerBonita },
    { name: "Oppenheimer", link: openheimmer },
    { name: "Palmer", link: Palmer },
    { name: "Que pasó ayer 1", link: quePasóAyer1 },
    { name: "Rapidos y Furiosos 9", link: rapidos9 },
    { name: "Rapidos y Furiosos 10", link: rapidos10 },
    { name: "Rubi: Aventuras de una kraken adolescente", link: rubi },
    { name: "Saw 3D", link: saw3d },
    { name: "Scary Movie 1", link: scaryMovie1 },
    { name: "Scream 6", link: scream6 },
    { name: "Sing 2", link: sing2 },
    { name: "Sonic 2", link: sonic2 },
    { name: "Sonidos de la Libertad", link: sonidosLibertad },
    { name: "Spiderman: Across the verse", link: spidermanAcross },
    { name: "Super Mario Bross", link: superMario },
    { name: "The Slam Dunk", link: slamDunk },
    { name: "Thor: Amor y Trueno", link: thorAmorTrueno },
    { name: "Titanic", link: titanic },
    { name: "Titanic 2", link: titanic2 },
    { name: "Todo a la misma vez y al mismo tiempo", link: todoTiempo },
    {
      name: "Transformers: El despertar de las bestias",
      link: transformersDespertar,
    },
    { name: "Un gato callejero llamado Bob", link: gatoCallejeroBob },
    { name: "Un vecino gruñón", link: vecinoGruñon },
    { name: "Una noche en el Roxbury", link: nocheRoxbury },
    { name: "Wifelike", link: wifeLike },
  ];
  const [input, setInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredMovies(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className="main">
      <h1>CARTELERA DE PLEX</h1>
      <div>
        <h3>
          BUSCAR PELICULA:{" "}
          <input type="text" value={input} onChange={handleInput} />
        </h3>
      </div>
      <div className="poster-container">
        {filteredMovies.map((movie) => (
          <div key={movie.name}>
            <img src={movie.link} alt={movie.name} className="img-poster" />
            <h4>{movie.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
