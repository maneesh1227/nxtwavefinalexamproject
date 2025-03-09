import './index.css';

const ListItem = (props) => {
    const { data, onDelete, onCompleted } = props;

    return (
        <li className="list-item">
            <input type="checkbox" onChange={() => onCompleted(data.id)} checked={data.isCompleted} />
            <h1 className={data.isCompleted ? 'completed' : ''}>{data.name}</h1>
            <button onClick={() => onDelete(data.id)}>Delete</button>
        </li>
    );
};

export default ListItem;
