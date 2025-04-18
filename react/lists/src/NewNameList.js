function NewNameList (props) {
    const fetchList = props.items;

    const renderList = fetchList.map((names) => <li>{names}</li>)
    return(
        <ul>{renderList}</ul>
    );
}

export default NewNameList;