import { useState, useEffect} from 'react'
import { supabase } from '../client';
import Sprite from '../components/Sprite';
import "./Party.css"

const Party = () => {
    const [party, setParty] = useState([]);
    const fetchParty= async () => {
      const { data, error } = await supabase.from("Characters").select("*");
      if (error) console.error("Fetch error:", error);
      else setParty(data);
    };
    useEffect(() => {
      fetchParty();
    }, []);
    const deleteCharacter = async (id) => {
    const { data, error } = await supabase
      .from("Characters")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete failed:", error);
    } else {
      console.log("Deleted:", data);
      fetchParty(); // refresh list after delete
    }
    };

    return (
        <div className="gallery">
      {party.map((char) => (
        <div key={char.id} className="char-card">
          <h3>{char.name}</h3>
          <p>{char.race} {char.class}</p>
          <Sprite x={char.x} y={char.y} />
          <button onClick={() => deleteCharacter(char.id)}>Delete</button>
        </div>
      ))}
        </div>
    )
}

export default Party;