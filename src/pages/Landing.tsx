import SubTitle from "../components/SubTitle";
import Footer from "../components/Footer";
import Profile from "../assets/profile-img.png";
import Navbar from "../components/Navbar";
const Landing = () => {
  return (
    <div>
      <div className="max-w-[1280px] space-y-8 m-auto p-3">
        <Navbar />
        <div className="flex ">
          <div className="w-[50%] relative">
            <p className="text-black  my-12 font-semibold text-3xl leading-[50px]">
              <span className="text-red-400">Hi, I am Ola. </span> <br /> I'm a
              <span className="text-red-400"> Product Designer</span> who crafts
              <br /> digital journeys that captivate and <br />
              connect users.
            </p>
            <p className="mt-30 absolute bottom-10">Previously at Tema</p>
          </div>
          <div className="w-1/2 h-[500px] ">
            <img src={Profile} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <SubTitle>Selected Works</SubTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-1">
            <div className="my-4 rounded-md bg-purple-700 w-[600px] h-[400px]"></div>
            <div className="my-4 rounded-md bg-green-300 w-[600px] h-[400px]"></div>
            <div className="my-4 rounded-md bg-red-900 w-[600px] h-[400px]"></div>
            <div className="my-4 rounded-md bg-purple-700 w-[600px] h-[400px]"></div>
            <div className="my-4 rounded-md bg-red-900 w-[600px] h-[400px]"></div>
            <div className="my-4 rounded-md bg-purple-700 w-[600px] h-[400px]"></div>
          </div>
        </div>
        <div>
          <SubTitle>Side projects</SubTitle>
          <div className="grid gap-2 grid-cols-3 justify-between">
            <div className="bg-blue-100 rounded-md w-[400px] h-48"></div>
            <div className="bg-blue-100 rounded-md w-[400px] h-48"></div>
            <div className="bg-blue-100  rounded-md w-[400px] h-48"></div>
          </div>
          <div className="flex ">
            {Array(3).map((_, index) => (
              <div key={index} className="bg-blue-300 w-48 h-48"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black px-[130px] mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
