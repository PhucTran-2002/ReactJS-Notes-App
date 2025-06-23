import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import NoteSearch from './components/NoteSearch';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addNote = (note) => {
    setNotes(prevNotes => [...prevNotes, note]);
  };

  const updateNote = (updatedNote) => {
    setNotes(prevNotes => prevNotes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
    setEditingId(null);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (updatedNote) => {
    updateNote(updatedNote);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Header />
      
      <NoteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <NoteForm 
        onSubmit={addNote} 
      />
      
      <NoteList 
        notes={notes} 
        searchTerm={searchTerm} 
        editingId={editingId}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
        onDelete={deleteNote}
      />
      
      <ToastContainer />
    </div>
  );
}

export default App;