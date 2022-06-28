import { changeMessage } from "../../../app/features/homeSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const HomeIndex = () => {
  const dispatch = useAppDispatch();

  const getMessage = useAppSelector((state) => state.home.message);

  const updateMessage = (message: string) => {
    dispatch(changeMessage(message));
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-bold lg:text-2xl text-base">{getMessage}</h1>
      </div>
      <div>
        <button onClick={() => updateMessage("عنوان صفحه بروزرسانی شد.")}>
          بروزرسانی عنوان صفحه
        </button>
      </div>
    </div>
  );
};

export default HomeIndex;
