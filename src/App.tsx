import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-bg-dark">
        <div className="">
          <div className="bg bg1"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>

        <div className="relative z-10 flex h-auto max-w-2xl px-4 lg:px-10 mx-auto bg-yellow-3000 md:mx-auto">
          <div className="w-full mt-20 text-left ">
            <div className="flex justify-between align-middle">
              <h1 className="text-4xl font-bold text-white">T O D O</h1>
            </div>
            <InputField />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
