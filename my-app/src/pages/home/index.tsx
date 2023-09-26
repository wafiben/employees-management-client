import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllEmployees} from "./../../store/employeer/actions";
import {AppDispatch} from "../../store/store";
import {ProgressSpinner} from "primereact/progressspinner";
import {GlobalState} from "../../types/GlobalState";
import {MenuBar} from "../../components/menu-bar/menu-bat";
import {EmployeeStatistics} from './../../components/static-area/index';
import {EmployeeCard} from './../../components/employeer/employee-card';
const Home=() => {
	const dispatch=useDispatch<AppDispatch>();

	const {employees,loading,letter}=useSelector(
		(state: GlobalState) => state.employeerReducer
	);
	useEffect(() => {
		dispatch(getAllEmployees());
	},[dispatch]);
	if(loading) {
		return (
			<div className="flex justify-content-center">
				<ProgressSpinner />
			</div>
		);
	}
	return (
		<>
			<EmployeeStatistics />
			<MenuBar />

			<div className="flex flex-wrap">
				{(employees&&employees.length!==0)&&
					employees
						.filter((elt) =>
							elt.name.toLowerCase().includes(letter.toLocaleLowerCase())
						)
						.map((employee) => <EmployeeCard employee={employee} />)}
			</div>
		</>
	);
};
export default Home;
