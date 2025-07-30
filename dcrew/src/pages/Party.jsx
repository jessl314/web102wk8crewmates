import { useState, useEffect} from 'react'
import { supabase } from '../client';
import Sprite from '../components/Sprite';
import "./Party.css"

const Party = () => {
    const [party, setParty] = useState([]);

    useEffect(() => {
    const fetchParty= async () => {
      const { data, error } = await supabase.from("Characters").select("*");
      if (error) console.error("Fetch error:", error);
      else setParty(data);
    };

    fetchParty();
    }, []);

    return (
        <div className="gallery">
      {party.map((char, index) => (
        <div key={index} className="char-card">
          <h3>{char.name}</h3>
          <p>{char.race} - {char.class}</p>
          <Sprite x={char.x} y={char.y} />
        </div>
      ))}
        </div>
    )
}

export default Party;