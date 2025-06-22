import NoteItem from './NoteItem';

const NoteList = ({ notes, searchTerm, onEdit, onDelete }) => {
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-8 space-y-4">
      {filteredNotes.length > 0 ? (
        filteredNotes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">
          {searchTerm ? 'No matching notes found' : 'No notes yet. Add one above!'}
        </p>
      )}
    </div>
  );
};

export default NoteList;