import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteItem = ({ note, onEdit, onDelete, isEditing, onSave, onCancel }) => {
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);
  
    const handleSave = () => {
      onSave({
        ...note,
        title: editedTitle,
        content: editedContent
      });
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              rows="3"
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={onCancel}
                className="px-3 py-1 bg-white-500 text-black border hover:boder-green-1000 rounded-lg transition flex items-center gap-1"
              >
                <CancelIcon fontSize="small" />
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-1"
              >
                <SaveIcon fontSize="small" />
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg mb-2 text-gray-800">{note.title}</h3>
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">{note.content}</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => onEdit(note.id)}
                className="px-3 py-1 bg-white-500 text-black border rounded-lg hover:boder-green-600 transition flex items-center gap-1"
              >
                <EditIcon fontSize="small" />
                Edit
              </button>
              <button 
                  onClick={() => {
                    onDelete(note.id);
                    toast.success('Deleted successfully!', {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: true,
                    });
                  }}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center gap-1"
              >
                <DeleteIcon fontSize="small" />
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default NoteItem;