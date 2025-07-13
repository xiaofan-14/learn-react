import {getImageUrl} from '../utils';

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile person={{
                name: 'Maria Skłodowska-Curie',
                imageId: 'szV5sdG',
                size: 100,
                profession: 'physicist and chemist',
                awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
                discovered: 'polonium (chemical element)'
            }}/>
            <Profile person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2',
                size: 70,
                profession: 'geochemist',
                awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
                discovered: 'a method for measuring carbon dioxide in seawater'
            }}/>
        </div>
    );
}

interface Person {
    name: string
    imageId: string
    size: number
    profession: string;
    awards: string[];
    discovered: string;
}

function Profile({person}: { person: Person }) {
    return <section className="profile">
        <h2>{person.name}</h2>
        <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={person.size}
            height={person.size}
        />
        <ul>
            <del>
                <li>
                    <b>Profession: </b>{person.profession}
                </li>
            </del>
            <li>
                <b>Awards: {person.awards.length} </b>
                ({person.awards.join(', ')})
            </li>
            <li>
                <b>Discovered: </b>{person.discovered}
            </li>
        </ul>
    </section>
}