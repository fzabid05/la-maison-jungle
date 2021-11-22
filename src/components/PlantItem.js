import CareScale from './CareScale';
import '../styles/PlantItem.css';

const PlantItem = ({ id, name, cover, water, light }) => {
    const handleClick = (e) => { console.log(e)}
    return (
        
        <li key={id} className='lmj-plant-item' onClick={handleClick}>
            <img className='lmj-plant-item-cover' src={cover} alt={name} />
             {name}
             <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
             </div>
        </li>
    );
};

export default PlantItem;