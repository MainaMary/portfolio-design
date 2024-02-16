import SideNavbar from "../components/SideNavbar";
import { MdOutlineContentCopy } from "react-icons/md";
import SubTitle from "../components/SubTitle";
import Input from "../components/Input";
const Contact = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-[80%] p-2 h-screen">
        <div className="rounded-md border shadow-md p-8">
          <h3 className="font-semibold text-3xl my-4">Contact</h3>
          <h4 className="my-6">Get in touch for collaborations</h4>
          <hr className="mb-6" />
          <div className="flex justify-between">
            <div>
              <p>ategunabas@gmail.com</p>
              <p>E-mail</p>
            </div>
            <div>
              <p>+923456789</p>
              <p>Phone</p>
            </div>
          </div>
          <div className="border gap-3 w-[150px] rounded-md mt-12 mb-24 flex items-center p-2 text-center">
            <MdOutlineContentCopy />
            <p>Copy email</p>
          </div>
          <form>
            <SubTitle>Send a message</SubTitle>
            <div className="grid grid-cols-2 gap-3">
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Email" />
            </div>
            <div className="my-3">
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="w-full p-3 bg-green-400 text-center text-[#fff] rounded-md"
              type="submit"
            >
              Send a message
            </button>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Contact;
