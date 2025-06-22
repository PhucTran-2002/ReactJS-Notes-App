import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NoteSearch = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="mb-">
        <TextField
          className="focus:ring-emerald-500 focus:border-emerald-500"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search notes..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
      
        />
      </div>
    );
  };
  
  export default NoteSearch;