import { useNavigate } from "react-router-dom";
import { icons } from "../utils/icons";
import Button from "./Button";

export default function EmptyState() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/kpi/new");
  };

  return (
    <div className="h-full flex flex-col items-center justify-start p-10 text-center">
      {icons.goal}
      <h3 className="text-lg font-medium text-body">No Goals/ Visions</h3>
      <p className="mt-2 text-sm text-slate-500 max-w-md">
        Select a Goal or subgoal from the Sidebar to view it here, or create a
        new one to get started.
      </p>
      <div className="mt-6">
        <Button
          className="button"
          icon={icons.add}
          text="Add new"
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
}
