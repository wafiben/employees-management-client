import { getEmployeesApi, getProjectsApi } from "./employeerApi";
import * as handleRequest from "../services/httpService";

describe("get the list of Projects", () => {
  it("should return an array of projects", async () => {
    const mockProjects = [
      { id: 1, name: "project one ", repo: "http/:git" },
      { id: 2, name: "Project two", repo: "https" },
    ];
    const handleRequestSpy = jest.spyOn(handleRequest, "handleRequest");
    handleRequestSpy.mockResolvedValue(mockProjects);
    const result = await getProjectsApi();
    expect(result).toEqual(mockProjects);
  });
});


describe("get all employees", async () => {
  const mockProjects = [
    {
      id: 1,
      birthDate: "1991-11-07",
      email: "leanne.graham@johns-group.com",
      name: "Leanne Graham",
      position: "FullStack Developer",
      projects: [1, 2],
      recrutementDate: "2017-06-15",
      gender: "female",
      score: 78,
      team: "A",
    },
    {
      id: 2,
      birthDate: "1993-04-13",
      email: "andrea.skiles@johns-group.com",
      name: "Andrea Skiles",
      position: "DevOps Engineer",
      projects: [5, 6],
      recrutementDate: "2015-02-01",
      gender: "female",
      score: 82,
      team: "D",
    },
  ];

  const handleRequestSpy = jest.spyOn(handleRequest, "handleRequest");
  handleRequestSpy.mockResolvedValue(mockProjects);
  const result = await getEmployeesApi();
  expect(result).toEqual(mockProjects);
});

/* ==>approche de testing */
/* mock */
/* pure */
