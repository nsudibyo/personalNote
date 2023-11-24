import React from 'react';
import PersonalNotesList from './PersonalNotesList';
import {getInitialData} from './data'; 
import PersonalNotesInput from './PersonalNotesInput';


class PersonalNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState ({notes});
    }

    onAddNoteHandler({ title, createdAt, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false,
              }
            ]
        }
    });
}

    render() {
        return (
        <div className='note-app'>
                <h1 className='title-app'>Aplikasi Catatan Pribadi</h1>
                <h2 className='add-note'>Tambah Catatan</h2>
                <PersonalNotesInput addNote={this.onAddNoteHandler} />
                <h2 className='active-note'>Catatan Aktif</h2>
                <PersonalNotesList notes= {this.state.notes} onDelete= {this.onDeleteHandler}/>
        </div>
        );
    }
}

export default PersonalNotesApp;
