import './CharacterInfo.scss';
import thor from '../../resources/img/thor.jpeg';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';

export default function CharacterInfo() {

    const comicsList = new Array(11).fill(null).map((item, index) => {
        return (<div className="CharacterInfo-ComicsItem" key={index}>
                    Amazing Spider-Man (1999) #503
                </div>);
    });

    return (
        <div className="CharacterInfo">
            <div className="CharacterInfo-Header">
                <img src={thor} alt="Thor"/>
                <div className="CharacterInfo-Details">
                    <div className="CharacterInfo-Name">
                        Thor
                    </div>
                    <div className="CharacterInfo-Btns">
                        <Button label='Homepage'/>
                        <Button label='Wiki' isGrey={true}/>
                    </div>
                </div>
            </div>
            <div className="CharacterInfo-Descr">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Repellendus maxime dolore, temporibus dignissimos tempore 
                eum dolorum dolorem obcaecati incidunt dolores a, quisquam, 
                quam excepturi eveniet facere. 
                Rem, ullam. Voluptatibus, reiciendis!
            </div>
            <div className="CharacterInfo-Comics">Comics: </div>
            <div className="CharacterInfo-ComicsList">
                {comicsList}            
            </div>
            <div className="CharacterInfo-Select">
                Please select a character to see information
            </div>
            <Skeleton />
        </div>
    );
}