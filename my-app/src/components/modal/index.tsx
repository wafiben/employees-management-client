import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";
import { GlobalState } from "../../types/GlobalState";
import { ProgressSpinner } from "primereact/progressspinner";
import { ProjectComponent } from "../project/project";

type ModalProps = {
  handleClose: () => void;
  visible: boolean;
 
};
export const ModalProject: React.FC<ModalProps> = ({
  handleClose,
  visible,
}) => {
  const { projectsEmployee, loading } = useSelector(
    (state: GlobalState) => state.employeerReducer
  );
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Projects"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => handleClose()}
      >
        {projectsEmployee.length !== 0 &&
          projectsEmployee.map((elt, index) => (
            <ProjectComponent key={elt.id} project={elt} index={index} />
          ))}
      </Dialog>
    </div>
  );
};
