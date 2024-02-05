import "./App.css";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
console.log(reviews);
function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto"></div>
        <Testimonials  reviews={reviews}/>
      </div>
      
    </div>
  );
}

export default App;
