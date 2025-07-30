import React, { useState } from 'react';
import { supabase } from '../client'
import Sprite from "../components/Sprite"
import "./CharacterBuilder.css";

const partyPos = {
    Halfling: {
        Slinger : { x: 0, y: 0},
        Rogue : { x: 1, y: 0},
        Ranger : { x: 2, y: 0},
        Assassin : { x: 3, y: 0},
        Bard : { x: 4, y: 0}
    },
    Goblin: {
        Archer : { x: 0, y: 1},
        Fanatic : { x: 1, y: 1},
        Fighter : { x: 2, y: 1},
        Occultist : { x: 3, y: 1},
        ['Wolf Rider'] : { x: 4, y: 1}
    },
    LizardFolk: {
        Archer : { x: 0, y: 2},
        Scout : { x: 1, y: 2},
        Spearman : { x: 2, y: 2},
        Gladiator : { x: 3, y: 2},
        Bestial : { x: 4, y: 2}
    }
}

const CharacterBuilder = () => {
  const [selectRace, setSelectedRace] = useState('');
  const [selectClass, setSelectedClass] = useState('');

  const races = Object.keys(partyPos);
  const classes = selectRace
    ? Object.keys(partyPos[selectRace])
    : [];

  const createChar = async (event) => {
    event.preventDefault()
    if (!selectRace || !selectClass) {
        console.log("Race or class not selected yet");
        return; 
    }
    const position = partyPos[selectRace]?.[selectClass];
    if (!position) {
        console.error("Invalid race/class combo");
        return;
    }
    const { data, error } = await supabase
    .from("Characters")
    .insert({
      name: character.name,
      race: selectRace,
      class: selectClass,
      x: position.x,
      y: position.y,
    })
    .select();

  if (error) {
    console.error("Insert failed:", error);
  } else {
    console.log("Insert success:", data);
    window.location.href = '/party';
  }
  }


  return (
    <div className="create-container">
        <div className="create"> 
            <Sprite x={0} y={0}/>
            <select
                value={selectRace}
                onChange={(e) => {
                setSelectedRace(e.target.value);
                setSelectedClass(""); // reset class when race changes
                }}
            >
                <option value="">Select Race</option>
                {races.map((race) => (
                <option key={race} value={race}>
                    {race}
                </option>
                ))}
            </select>

            <select
                value={selectClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                disabled={!selectRace} // disable if no race selected
            >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                <option key={cls} value={cls}>
                    {cls}
                </option>
                ))}
            </select>
            <input type="submit" value="Submit" onClick={createChar} />
        </div>
    </div>
  )
}

export default CharacterBuilder;
// {pos ? <Sprite x={pos.x} y={pos.y} /> : <p>No sprite found</p>}