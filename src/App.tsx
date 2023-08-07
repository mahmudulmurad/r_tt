import { DiRedhat } from "react-icons/di";
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <div
        className="flex flex-col justify-center items-center gap-2 bg-slate-700
                 text-white shadow-lg shadow-gray-600 rounded-md p-4 w-96 h-48"
      >
        <div className="flex items-center justify-center p-2">
          <div className="ring ring-emerald-500 rounded-full">
            <DiRedhat className="text-emerald-500 text-5xl m-2" />
          </div>
        </div>
        <div className="text-sm">Mahmudul Murad</div>
        <div className="text-xs">mahmudulmurad@gmail.com</div>
      </div>
      <div className="flex flex-col bg-slate-700 text-white shadow-lg shadow-gray-600 rounded-md p-4 w-96 h-48">
        <div className="text-xs my-2 text-center">
          You talking to me? -Taxi Driver, 1976
        </div>
        <div className="flex justify-center items-center">
          <div>1</div>
          <div className="flex justify-end items-center mx-5">
            <div>
              <DiRedhat className="text-2xl" />
            </div>
            <div className="text-xs mx-2">Earth, Milky Way</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
