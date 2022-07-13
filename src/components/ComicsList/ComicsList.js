import './ComicsList.scss';
import ultimateWar from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import ComicsItem from '../ComicsItem/ComicsItem';
import Button from '../Button/Button';


export default function ComicsList() {
    const comicsData = [
        {
            imgSrc: ultimateWar, 
            imgAlt: 'Ultimate war',
            price: '9.99$',
            title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB'
        },
        {
            imgSrc: xMen, 
            imgAlt: 'X MEN',
            price: null,
            title: 'X-Men: Days of Future Past'
        },
    ];

    const comics = new Array(8).fill(null).map((item, index) => {
        const comicsObj = (index % 2) === 0 ? comicsData[0] : comicsData[1];

        return <ComicsItem {...comicsObj} key={index}/>;
    });

    return (
        <div className="ComicsList">
            <div className="ComicsList-Grid">
                {comics}
            </div>
            <div className="ComicsList-Btn">
                <Button label="load more" isLong={true}/>
            </div>
        </div>
    );
}