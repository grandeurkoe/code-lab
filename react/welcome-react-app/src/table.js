import Student from './student';
import Employee from './employee'
import './table.css'

function table() {
    return (
        <div class="tableBlock">
            <div class="studentBlock">
                <h3>Student List</h3>
                <Student />
            </div>
            <div class="employeeBlock">
                <h3>Employee List</h3>
                <Employee />
            </div>
        </div>
    );
}

export default table;