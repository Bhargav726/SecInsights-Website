import { FaRegFileAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
//import { FaTimes } from 'react-icons/fa';

const SelectedItemsList = ({ selections, onDelete }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Selected Documents</h2>

      {selections.length === 0 ? (
        <div className="bg-gray-100 text-center py-12 rounded-md">
          <FaRegFileAlt className="mx-auto text-3xl text-gray-400 mb-2" />
          <p className="text-gray-500">Use the document selector above</p>
          <p className="text-gray-500">to start adding documents</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {selections.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-200 hover:bg-cyan-200 border border-gray-200 rounded-md px-4 py-3 transition"
            >
              <div className="grid grid-cols-3 gap-4 flex-1 text-gray-800">
                <span className="truncate">{item.company}</span>
                <span className="truncate">{item.docType}</span>
                <span className="truncate">{item.year}</span>
              </div>
              <button
                className="ml-4 text-white hover:text-red-600 border bg-gray-500"
                onClick={() => onDelete(index)}
                aria-label="Delete"
              >
              <h1></h1>
              {/* <FaTimes className='h-5 w-5'/> */}
              <FaTrash className="h-5 w-5" />
            </button>
            </li>
      ))}
    </ul>
  )
}
    </div >
  );
};

export default SelectedItemsList;

