export default function NoteList({ notes, selectedNoteId, onSelectNote, searchQuery }) {
  // Filter notes based on search query
  const filteredNotes = notes.filter((note) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      note.title?.toLowerCase().includes(query) ||
      note.content?.toLowerCase().includes(query)
    );
  });

  if (filteredNotes.length === 0) {
    return (
      <div className="p-4 text-gray-500 text-center">
        No notes found
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredNotes.map((note) => {
        const isSelected = selectedNoteId === note.id;
        const preview = note.content?.substring(0, 100) || '';
        
        return (
          <div
            key={note.id}
            onClick={() => onSelectNote(note.id)}
            className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
              isSelected ? 'bg-purple-100' : 'hover:bg-gray-50'
            }`}
          >
            <h3 className="font-semibold text-gray-800 mb-1 truncate">
              {note.title || 'Untitled Note'}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {preview}
            </p>
          </div>
        );
      })}
    </div>
  );
}
