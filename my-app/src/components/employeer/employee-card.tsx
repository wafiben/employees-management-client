import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Employee} from "../../types/Employee";
import {formatDate,getYears} from "../../utils/date";
import {Rating} from "primereact/rating";
import {useNavigate} from "react-router-dom";
import woman from "../../assets/images/woman.svg"
import man from "../../assets/images/man.svg"
type PropsComponent={
	employee: Employee;
};

export const EmployeeCard: React.FC<PropsComponent>=({employee}) => {
	const navigate=useNavigate();
	const footer=(
		<div className="flex flex-wrap justify-content-end gap-2">
			<Button
				label="See details"
				icon="pi pi-check"
				onClick={() => navigate(`/employees/${employee.id}`)}
			/>
		</div>
	);
	return (
		<div className="card flex justify-content-center w-4 mt-7">
			<Card
				title={employee.name}
				subTitle={employee.email}
				footer={footer}
				className="md:w-25rem"
			>
				<div className="flex">
					<div className="m-0">
						<div>
							Recrutement Date:
							{formatDate(employee.recrutementDate,"MMMM DD, YYYY")}
						</div>
						<div>Age:{getYears(employee.birthDate)}</div>
						<div>Position:{employee.position}</div>
					</div>
					<img src={employee.gender==="male"? man:woman} alt={`photo/${employee.id}`} />
				</div>
				<div className="mt-1">
					<Rating value={employee.score/10} stars={10} cancel={false} />
				</div>
			</Card>
		</div>
	);
};


