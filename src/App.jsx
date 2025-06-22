import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import NoteSearch from './components/NoteSearch';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleSubmit = (note) => {
    editingNote ? updateNote(note) : addNote(note);
  };

  const handleCancel = () => {
    setEditingNote(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen">
      <Header />
      
      <NoteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <NoteForm 
        onSubmit={handleSubmit} 
        editingNote={editingNote}
        onCancel={handleCancel}
      />
      
      <NoteList 
        notes={notes} 
        searchTerm={searchTerm} 
        onEdit={setEditingNote} 
        onDelete={deleteNote} 
      />
    </div>
  );
}

export default App;