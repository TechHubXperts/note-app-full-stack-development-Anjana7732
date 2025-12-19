// localStorage utility functions for notes

const STORAGE_KEY = 'notes';

export const getNotes = () => {
  try {
    const notesJson = localStorage.getItem(STORAGE_KEY);
    return notesJson ? JSON.parse(notesJson) : [];
  } catch (error) {
    console.error('Error reading notes from localStorage:', error);
    return [];
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    const newNote = {
      ...note,
      id: note.id || Date.now().toString(),
      createdAt: note.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    notes.push(newNote);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    return newNote;
  } catch (error) {
    console.error('Error saving note to localStorage:', error);
    throw error;
  }
};

export const deleteNote = (id) => {
  try {
    const notes = getNotes();
    const filteredNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredNotes));
    return true;
  } catch (error) {
    console.error('Error deleting note from localStorage:', error);
    throw error;
  }
};

export const getNoteById = (id) => {
  try {
    const notes = getNotes();
    return notes.find((note) => note.id === id) || null;
  } catch (error) {
    console.error('Error getting note from localStorage:', error);
    return null;
  }
};

