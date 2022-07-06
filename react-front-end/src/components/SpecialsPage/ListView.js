import ListItem from './ListItem';

const ListView = ({data}) => {

    const listItems = data.map( (l, index) => {
        return (
            <li className="list-group-item" key={`l-${index}`}>
                <ListItem data={l} />
            </li>
        )
    });

    return (
        <ul className="list-group">
           {listItems}
        </ul>
    )
}

export default ListView;