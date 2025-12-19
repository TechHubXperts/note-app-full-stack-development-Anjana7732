import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import AddNoteModal from './components/AddNoteModal';
import { getNotes, saveNote, deleteNote } from './utils/storage';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load notes from localStorage on mount
  useEffect(() => {
    const loadedNotes = getNotes();
    setNotes(loadedNotes);
  }, []);

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleSaveNote = (noteData) => {
    const newNote = saveNote(noteData);
    setNotes(getNotes());
    setSelectedNoteId(newNote.id);
    setIsModalOpen(false);
  };

  const handleDeleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(id);
      setNotes(getNotes());
      if (selectedNoteId === id) {
        setSelectedNoteId(null);
      }
    }
  };

  const handleSelectNote = (id) => {
    setSelectedNoteId(id);
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId) || null;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        onAddNote={handleAddNote}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />
      <div className="flex flex-col flex-1">
        <div className="flex-1 flex">
          <div className="w-64 border-r border-gray-200 bg-white flex flex-col">
            <NoteList
              notes={notes}
              selectedNoteId={selectedNoteId}
              onSelectNote={handleSelectNote}
              searchQuery={searchQuery}
            />
          </div>
          <NoteEditor note={selectedNote} onDelete={handleDeleteNote} />
        </div>
      </div>
      <AddNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
      />
    </div>
  );
}

export default App;
