import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {
	getAllEmployees,
	getAllEmployeesLoading,
	getSingleEmployeeLoading,
	getSingleEmployee,
	searchEmployees,
	getProjectsOfEmployee
} from "./actions";
import {EmployeeState} from "../../types/EmployeeState";


const initialState: EmployeeState={
	employees: [],
	loading: false,
	employee: null,
	letter: '',
	projectsEmployee: []

};
export const employeerSlice=createSlice({
	name: "employeer",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllEmployees.fulfilled,(state: any,action) => {
			return {
				...state,
				employees: action.payload,
				loading: false,
			};
		});
		builder.addCase(
			getAllEmployeesLoading,
			(state,action: PayloadAction<boolean>) => {
				return {
					...state,
					loading: true,
				};
			}
		);
		builder.addCase(getSingleEmployee.fulfilled,(state: any,action) => {
			return {
				...state,
				employee: action.payload,
				loading: false,
			};
		});
		builder.addCase(getSingleEmployeeLoading,(state: any,action: PayloadAction<boolean>) => {
			return {
				...state,
				loading: true,
			};
		});
		builder.addCase(searchEmployees,(state: any,action: PayloadAction<string>) => {
			return {
				...state,
				letter: action.payload
			};
		});
		builder.addCase(getProjectsOfEmployee.fulfilled,(state: any,action) => {
			return {
				...state,
				projectsEmployee: action.payload
			};
		});
	},
});
export default employeerSlice;
