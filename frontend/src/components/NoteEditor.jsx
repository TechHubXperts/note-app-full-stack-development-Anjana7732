export default function NoteEditor({ note, onDelete }) {
  if (!note) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Select a note to view or create a new one</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header with Delete Button */}
      <div className="border-b border-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {note.title || 'Untitled Note'}
        </h2>
        <button
          onClick={() => onDelete(note.id)}
          title="Delete note"
          className="text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-4 text-sm text-gray-500">
          <p>Created: {formatDate(note.createdAt)}</p>
          <p>Last updated: {formatDate(note.updatedAt)}</p>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-wrap">
            {note.content || 'No content'}
          </p>
        </div>
      </div>
    </div>
  );
}
