import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("An Error Has Occur Please Try Again Later", {
          variant: "error",
        });
        setLoading(false);
      });
  }, [id]);

  function handleEditBook() {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An Error Has Occur Please Try Again Later");
        setLoading(false);
      });
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
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
              defaultValue={title}
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
              defaultValue={author}
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
              defaultValue={publishYear}
            />
          </legend>
          <button
            type="submit"
            className="p-2 bg-sky-300 m-8"
            onClick={handleEditBook}
          >
            Change
          </button>
        </form>
      )}
    </div>
  );
};

export default EditBook;
