import { createSlice } from "@reduxjs/toolkit";
import { notes } from "../../types/notes";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [] as notes[],
        loading: false,
        error : null
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter(note => note._id !== action.payload)
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        addBlock: (state, action) => {
            const note = state.notes.find(note => note._id === action.payload.noteId)
            if(note) {
                note.blocks.push(action.payload.block)
            }
        },
        removeBlock: (state, action) => {
            const note = state.notes.find(note => note._id === action.payload.noteId)
            if(note) {
                note.blocks = note.blocks.filter(block => block._id !== action.payload.blockId)
            }
        },
        updateBlock: (state, action) => {
            const note = state.notes.find(note => note._id === action.payload.noteId)
            if(note) {
                const block = note.blocks.find(block => block._id === action.payload.blockId)
                if(block) {
                    block.content = action.payload.content
                }
            }
        }
    }
})

export const { addNote, removeNote, setNotes, setLoading, setError, addBlock, removeBlock, updateBlock } = notesSlice.actions

export default notesSlice.reducer