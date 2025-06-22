import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      id: Date.now(),
      title,
      content
    });

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white-50 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create New Note</h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block font-medium mb-1 text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Note title"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="content" className="block font-medium mb-1 text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          rows="4"
          placeholder="Write your note here..."
        />
      </div>
      
      <div className="flex justify-end">
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
      >
        <SaveIcon fontSize="small" />
        Save Note
      </button>
      </div>
    </form>
  );
};

export default NoteForm;