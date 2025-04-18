import StudentList from "./studentlist";

function student() {
    let studentList = [
        {id: 101, name: "Vishal Kushwaha"},
        {id: 102, name: "Meena Devi"},
        {id: 103, name: "Shweta Kumari"}
    ];

    let studentComponent = [];
    for (let std of studentList) {
        studentComponent.push(<StudentList item = {std}/>);
    }

    return (
        <div class="studentTable">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {studentComponent}
            </table>
        </div>
    );
}

export default student;