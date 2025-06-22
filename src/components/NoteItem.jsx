import { useState } from 'react';

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
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={onCancel}
                className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                X Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                ✔ Save
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
          </>
        )}
      </div>
    );
  };
  
  export default NoteItem;