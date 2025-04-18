import EmployeeList from "./employeelist";

function employee() {
    let employeeList = [
        {id: 201, name: "Hasan Minhaj"},
        {id: 202, name: "Ronny Singh"},
        {id: 203, name: "Hasan Piker"},
    ];

    let employeeComponent = [];
    for (let emp of employeeList) {
        employeeComponent.push(<EmployeeList item = {emp}/>)
    }

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            {employeeComponent}
        </table>
    );
}

export default employee;