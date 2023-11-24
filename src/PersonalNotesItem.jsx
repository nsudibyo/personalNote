import React from 'react';
import { showFormattedDate } from './data'
import DeleteButton from './DeleteButton';


function PersonalNotesItem ({title, createdAt, body, id, onDelete}) {

    return (
        <div className = "note-item__body">
            <h3 className = "note-item__title">{title}</h3>
            <p className = "note-item__date">{showFormattedDate(createdAt)}</p>
            <p className = "note-item__content">{body}</p>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default PersonalNotesItem;
