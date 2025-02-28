import Createform from "../component/create-form";

const Createpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="font-bold mb-5 text-2xl  ">Upload image</h1>
        <Createform />
      </div>
    </div>
  );
};

export default Createpage;
