import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar("An Error Has Occur Please Try Again Later", {
          variant: "error",
        });
      });
  }, [id]);
  function handleDeleteBook() {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
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
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="text-xl">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="text-xl">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="text-xl">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="text-xl">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="text-xl">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="text-xl">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3 className="text-2xl">
              Are You Sure You want to delete this book?
            </h3>

            <button
              className="p-4 bg-red-600 text-white m-8 w-full"
              onClick={handleDeleteBook}
            >
              Yes, Delete it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
