import React from 'react';
import PersonalNotesItem from './PersonalNotesItem';

function PersonalNotesList ({notes, onDelete}) {
    return (
        <div className = "notes-list">
            {
                notes.length === 0 ? (                   
                        <p className="notes-list__empty-message">Tidak ada catatan</p>                   
                ) : (
            notes.map ((note) => (
                <PersonalNotesItem 
                key={note.id} 
                id={note.id}
                onDelete={onDelete}
                {...note}/>
            ))
                )
            }
        </div>

    );
}

export default PersonalNotesList;
