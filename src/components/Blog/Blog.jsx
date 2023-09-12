import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className=" mb-5 px-7 pb-8">
      <img className=" w-full rounded-md" src={cover} alt="" />
      <div className="flex justify-between  mt-5 mb-3">
        <div className="flex items-center gap-3">
          <img className="w-[50px]" src={author_img} alt="" />
          <div>
            <h5 className="font-bold text-2xl text-gray-950">{author}</h5>
            <p className="font-medium text-gray-500">{posted_date} </p>
          </div>
        </div>
        <div className="items-center ">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-[4px] text-[20px] text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="font-medium text-gray-500 mt-1">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-indigo-700 underline font-semibold mt-2 "
      >
        Mark as read
      </button>
      <hr className="mt-6" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
