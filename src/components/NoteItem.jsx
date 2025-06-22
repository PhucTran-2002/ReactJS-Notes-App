const NoteItem = ({ note, onEdit, onDelete }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{note.title}</h3>
        <p className="text-gray-700 mb-4 whitespace-pre-wrap">{note.content}</p>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={() => onEdit(note)}
            className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(note.id)}
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default NoteItem;