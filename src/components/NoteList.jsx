import NoteItem from './NoteItem';

const NoteList = ({ notes, searchTerm, editingId, onEdit, onSave, onCancel, onDelete }) => {
  const filteredNotes = notes.filter(note => {
    if (!searchTerm) return true;
    
    const trimmedSearchTerm = searchTerm.trim();
    if (!trimmedSearchTerm) return true;
    
    // Normal search (with spaces)
    const normalMatch = note.title.toLowerCase().includes(trimmedSearchTerm.toLowerCase()) || 
                       note.content.toLowerCase().includes(trimmedSearchTerm.toLowerCase());
    
    // Search without spaces
    const searchWithoutSpaces = trimmedSearchTerm.replace(/\s/g, '').toLowerCase();
    const titleWithoutSpaces = note.title.replace(/\s/g, '').toLowerCase();
    const contentWithoutSpaces = note.content.replace(/\s/g, '').toLowerCase();
    
    const noSpacesMatch = titleWithoutSpaces.includes(searchWithoutSpaces) || 
                         contentWithoutSpaces.includes(searchWithoutSpaces);
    
    return normalMatch || noSpacesMatch;
  });

  return (
    <div className="mt-8 space-y-4">
      {filteredNotes.length > 0 ? (
        filteredNotes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            isEditing={note.id === editingId}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">
          {searchTerm ? 'No matching notes found' : 'No notes found. Create your first note!'}
        </p>
      )}
    </div>
  );
};

export default NoteList;