import {useState} from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // 잘못된 방법
    setIsEditing(editing => !editing);
  }

  let playerName = <span className="player-name">{name}</span>

  if (isEditing) {
    playerName = <input value={name} type="text" required />
  }

  return (
      <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
        <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
      </li>
  )
}