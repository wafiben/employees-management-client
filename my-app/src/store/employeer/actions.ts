import {createAction} from "@reduxjs/toolkit";
import {
	GET_ALL_EMPLOYEES,
	GET_ALL_EMPLOYEES_LOADING,
	GET_SINGLE_EMPLOYEE_LOADING,
	SEARCH_EMPLOYEE,
	GET_PROJECTS_OF_EMPLOYEE,
	GET_PROJECTS_OF_EMPLOYEE_LOADING
} from "../contantes";
import {
	getEmployeesApi,
	getSingleEmployeeApi,
	getProjectsApi
} from "./../../api/employeerApi";

import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAllEmployeesLoading: any=createAction(
	GET_ALL_EMPLOYEES_LOADING
);
export const getAllEmployees=createAsyncThunk(
	GET_ALL_EMPLOYEES,
	async (_,{dispatch}) => {
		try {
			dispatch(getAllEmployeesLoading(true));
			const res=await getEmployeesApi();
			return res;
		} catch(error) {
			throw new Error("Failed to fetch employeers.");
		} finally {
			dispatch(getAllEmployeesLoading(false));
		}
	}
);

export const getSingleEmployeeLoading: any=createAction(
	GET_SINGLE_EMPLOYEE_LOADING
);
export const getSingleEmployee=createAsyncThunk(
	getSingleEmployeeLoading,
	async (id: string,{dispatch}) => {
		try {
			dispatch(getSingleEmployeeLoading(true));
			const res=await getSingleEmployeeApi(id);
			return res;
		} catch(error) {
			throw new Error("Failed to Get Single employee.");
		} finally {
			dispatch(getSingleEmployeeLoading(false));
		}
	}
);
export const searchEmployees=createAction(SEARCH_EMPLOYEE,(data: string) => {
	return {
		payload: data,
	};
});

export const getProjectsOfEmployeeLoading: any=createAction(
	GET_PROJECTS_OF_EMPLOYEE_LOADING
);


export const getProjectsOfEmployee=createAsyncThunk(
	GET_PROJECTS_OF_EMPLOYEE,
	async (tableProjects: number[],{dispatch}) => {
		try {
			dispatch(getProjectsOfEmployeeLoading(true));
			const res=await getProjectsApi();
			const filtredProjects=res.filter((elt) => tableProjects.includes(elt.id))
			return filtredProjects;
		} catch(error) {
			throw new Error("Failed to fetch employeers.");
		} finally {
			dispatch(getProjectsOfEmployeeLoading(false));
		}
	}
);
