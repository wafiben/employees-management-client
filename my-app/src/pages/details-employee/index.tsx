import {useEffect,useState} from "react";
import {getSingleEmployee} from "../../store/employeer/actions";
import {AppDispatch} from "../../store/store";
import {useParams} from "react-router-dom";
import {Card} from "primereact/card";
import {Avatar} from "primereact/avatar";
import {GlobalState} from "../../types/GlobalState";
import {ProgressSpinner} from "primereact/progressspinner";
import {getYears} from "../../utils/date";
import {Button} from "primereact/button";
import {ModalProject} from "../../components/modal";
import {getProjectsOfEmployee} from './../../store/employeer/actions';
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export const Details: React.FC=() => {
	const navigate=useNavigate()
	const [visible,setVisible]=useState<boolean>(false);
	const {projects}=useSelector((state: GlobalState) => {
		if(state.employeerReducer.employee!==null) {
			return state.employeerReducer.employee;
		}
		return {projects: []};
	});


	const handleShow=() => {
		setVisible(true);
		dispatch(getProjectsOfEmployee(projects))

	}
	const handleClose=() => setVisible(false);

	const {employee,loading}=useSelector(
		(state: GlobalState) => state.employeerReducer
	);

	const {id}=useParams();
	const dispatch=useDispatch<AppDispatch>();
	useEffect(() => {
		if(id) {
			dispatch(getSingleEmployee(id));
		}
	},[dispatch,id]);
	if(loading) {
		return (
			<div className="flex justify-content-center">
				<ProgressSpinner />
			</div>
		);
	}

	return (
		<div className="card flex justify-content-center">
			<div className="card w-5 mt-3 text-center">
				<Card title={employee&&employee.name}>
					<Avatar
						label={employee? employee.name[0]:""}
						size="large"
						style={{backgroundColor: "#2196F3",color: "#ffffff"}}
						shape="circle"
					/>
					<p className="m-0">{employee&&employee.position}</p>
					<p className="m-0">
						Work with the team :<strong> {employee&&employee.team}</strong>
					</p>
					<p className="m-0">
						Experience :
						<strong>
							{employee&&getYears(employee.recrutementDate)}years
						</strong>
					</p>
					<div className="m-2 flex justify-content-around">
						<Button label="Show Projects" icon="pi pi-external-link" onClick={handleShow} />
						<Button label="back to Home" severity="info" onClick={()=>navigate('/employees')} />
					</div>
				</Card>
				<ModalProject
					visible={visible}
					handleClose={handleClose}
				/>
			</div>
		</div>
	);
};
