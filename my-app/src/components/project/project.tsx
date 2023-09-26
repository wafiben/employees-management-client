import {Project} from "../../types/Project";
type ProjectProps={
	project: Project;
	index: number;
};
export const ProjectComponent: React.FC<ProjectProps>=({
	project,
	index
}) => {
	return (
		<div>
			<h4>Project {index+1}</h4>
			<span>project Name: {project.name}</span>
			<br />
			<span>repo: {project.repo}</span>
		</div>
	);
};
