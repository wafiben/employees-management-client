import { handleRequest } from "../services/httpService";
import { BASE_DEV_URL } from "../config/config";
import { Project } from "../types/Project";
import { Employee } from "../types/Employee";

export const getEmployeesApi = async () =>
  await handleRequest<Employee[]>(`${BASE_DEV_URL}/employees`, "GET");

export const getSingleEmployeeApi = async (id: string) =>
  await handleRequest<Employee>(`${BASE_DEV_URL}/employees/${id}`, "GET");
  
export const getProjectsApi = async () =>
  await handleRequest<Project[]>(`${BASE_DEV_URL}/projects`, "GET");
