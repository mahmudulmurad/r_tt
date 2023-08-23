import { DiMozilla, DiTerminal, DiGitBranch } from "react-icons/di";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { UiInputTextField } from "./component/Input";
import configEnv from "./config/config";

const App = () => {
  return (
    <>
    <p>API Key: {configEnv.apiKey}</p>
    <p>API Name: {configEnv.apiName}</p>
      <UiInputTextField
        label="Name"
        id="name"
        type="text"
        placeholder="Enter your name"
      />
      <div className="flex flex-col justify-center items-center gap-8 h-screen">
        <div
          className="flex flex-col justify-center items-center gap-2 bg-slate-700
                 text-white shadow-lg shadow-gray-600 rounded-md p-4 w-96 h-48"
        >
          <div className="flex items-center justify-center p-2">
            <div className="ring ring-emerald-500 rounded-full">
              <DiMozilla className="text-emerald-500 text-5xl m-2" />
            </div>
          </div>
          <div className="text-sm">Mahmudul Murad</div>
          <div className="text-xs">mahmudul.murad7@gmail.com</div>
        </div>
        <div
          className="flex flex-col justify-center items-center
            bg-slate-700 text-white shadow-lg shadow-gray-600
              rounded-md p-4 w-96 h-48"
        >
          <div className="text-xs my-2 text-center">
            https://tinyurl.com/24j9zyut
          </div>
          <div className="w-full inline-flex">
            <div className="w-2/5"></div>
            <div className="flex flex-col justify-start gap-1 w-3/5">
              <div className="flex justify-start items-center mx-5">
                <div>
                  <DiTerminal className="text-emerald-500 text-2xl" />
                </div>
                <div className="text-xs mx-2">software engineer</div>
              </div>

              <div className="flex justify-start items-center mx-5">
                <div>
                  <DiGitBranch className="text-emerald-500 text-2xl" />
                </div>
                <div className="text-xs mx-2">mahmudulmurad.github.io</div>
              </div>

              <div className="flex justify-start items-center mx-5">
                <div>
                  <GiRotaryPhone className="text-emerald-400 text-2xl" />
                </div>
                <div className="text-xs mx-2">+8801###359136</div>
              </div>

              <div className="flex justify-start items-center mx-5">
                <div>
                  <FaEarthAmericas className="text-emerald-500 text-2xl" />
                </div>
                <div className="text-xs mx-2">earth, milky way</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
