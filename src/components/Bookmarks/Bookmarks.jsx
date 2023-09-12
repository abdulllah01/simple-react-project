import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 ">
      <div className="bg-violet-100 py-3 px-6 mb-5 text-center rounded-md border-[2px] border-violet-500">
        <h3 className="text-violet-800 font-bold">
          Spent time on read : {readingTime}
        </h3>
      </div>

      <div className="bg-gray-100 py-7 rounded-md px-6">
        <h3 className="text-gray-800 text-[21px]  font-bold pb-4">
          Bookmarks : {bookmarks.length}
        </h3>

        {bookmarks.map((bookmark, idx) => (
          <div key={idx} className="bg-white px-7 py-4 rounded-md mb-5 ">
            <h4 className="text-lg font-semibold">{bookmark.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
  readingTime: PropTypes.number,
};

export default Bookmarks;
