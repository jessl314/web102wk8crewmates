import spritesheet from '../assets/HumanoidSprites.png';

function Sprite({ x, y, scale=2 }) {
  const size = 72;
  const spriteStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${spritesheet})`,
    backgroundPosition: `-${x * size}px -${y * size}px`,
    backgroundSize: '360px 216px', 
    imageRendering: 'pixelated',
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    display: 'inline-block',
  };

  return <div style={spriteStyle} />;
}

export default Sprite;