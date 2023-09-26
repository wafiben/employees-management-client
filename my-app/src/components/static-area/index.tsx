import {Card} from 'primereact/card';
import {useSelector} from 'react-redux';
import {GlobalState} from '../../types/GlobalState';
import {getMaxYear} from '../../utils/date';

export const EmployeeStatistics=() => {
	const {employees}=useSelector((state: GlobalState) => state.employeerReducer);
	const maleEmployees=employees&&employees.length!==0? employees.filter((elt) => elt.gender==="male"):[];
	const femaleEmployees=employees&&employees.filter((elt) => elt.gender==="female");
	const teams=employees&&employees.map((elt) => elt.team);
	const uniqueTeam=Array.from(new Set(teams));
	const arrayOfScors=employees&&employees.map((elt) => elt.score);
	const max=Math.max(...arrayOfScors);
	const employeeOfYear=employees.find((elt) => elt.score===max);
	const hiredDateTable=employees.map((elt) => getMaxYear(elt.recrutementDate));
	const maxDate=Math.max(...hiredDateTable);
	const lastHired=employees.find((elt) => getMaxYear(elt.recrutementDate)===maxDate);

	return (
		<div className="mt-3">
			<Card title="Employee Statistics">
				<div className="grid grid-cols-3 gap-4">
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Total Employees</div>
							<div className="text-4xl font-bold">{employees.length}</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Male Employees</div>
							<div className="text-4xl font-bold">{maleEmployees.length}</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Female Employees</div>
							<div className="text-4xl font-bold">{femaleEmployees.length}</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Total Teams</div>
							<div className="text-4xl font-bold">{uniqueTeam.length}</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-xl font-semibold">Employee of the Year</div>
							<div className="font-bold">{employeeOfYear&&employeeOfYear.name}</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Last Hired</div>
							<div className="text-xl font-bold">{lastHired&&lastHired.name}</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};
