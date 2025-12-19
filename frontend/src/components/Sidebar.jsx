export default function Sidebar({ onAddNote, onSearchChange, searchQuery }) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo and App Name */}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-purple-600">NotesApp</h1>
      </div>

      {/* Search Input */}
      <div className="p-4 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Add Note Button */}
      <div className="p-4">
        <button
          onClick={onAddNote}
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
