import {Employee} from "./Employee";
import {Project} from "./Project";
export type EmployeeState={
	employees: Employee[];
	loading: boolean;
	employee: Employee|null,
	letter: string,
	projectsEmployee: Project[]
};
