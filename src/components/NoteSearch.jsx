import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NoteSearch = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    const value = e.target.value.trimStart();
    setSearchTerm(value);
  };
  return (
    <div className="mb-6 pt-20">
      <TextField
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search notes..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      />
    </div>
  );
};

export default NoteSearch;
  
