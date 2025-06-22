const NoteSearch = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search notes..."
        />
      </div>
    );
  };
  
  export default NoteSearch;