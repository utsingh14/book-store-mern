import { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  function handleSaveBook() {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        // alert("Book Created Successfully");
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // alert("An Error Has Occur Please Try Again Later");
        enqueueSnackbar("An Error Has Occur Please Try Again Later", {
          variant: "error",
        });
        setLoading(false);
      });
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form
          action=""
          className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
        >
          <legend className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-500">
              Title:{" "}
            </label>
            <input
              type="text"
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) => setTitle(e.target.value)}
            />
          </legend>
          <legend className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-500">
              Author:{" "}
            </label>
            <input
              type="text"
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </legend>
          <legend className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-500">
              Publish Year:{" "}
            </label>
            <input
              type="number"
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              min={1000}
              max={9999}
            />
          </legend>
          <button
            type="submit"
            className="p-2 bg-sky-300 m-8"
            onClick={handleSaveBook}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBook;
