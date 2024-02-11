import Extend from "./Extend";
import developerimg from "../src/assets/pexels-pixabay-270632.jpg";
function App() {
  const user = "Sarthak Singh";
  return (
    <>
      {/* instead of using div we can use this empty brackets to give the return
       because react will give only only return so we need to enclose everything either 
       inside a div or we can just use this empty syntax */}
      <div className="w-full h-screen flex justify-center bg-black items-center">
        <div className="text-4xl font-serif text-white w-80 h-3/5 text-center bg-white flex flex-col">
          <div className="w-20 rounded-full h-20 bg-orange-200 relative left-28 top-1">
            <img
              src={developerimg}
              alt="Web Developer"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <h1 className="text-black">{user}</h1>
          {/* this is how we take value of variable and display it */}
          <Extend Language="HTML" />
          <Extend Language="CSS" />
          <Extend Language="JavaScript" />
          <Extend Language="Tailwind CSS" />
          <Extend Language="ReactJs" />
          <Extend Language="NextJs" />
        </div>
      </div>
    </>
  );
}

export default App;

//Modified the ReactPractice1 using Props and inserting the Language of my own Choice
