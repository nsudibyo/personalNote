import React from 'react';
     
class PersonalNotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: +new Date(),
            title: '',
            body: '',
            createdAt: new Date().toISOString(), 
            archived: false,
          }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }

 onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: ' ',
        body: ' ',
      };
    });
  }

 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
       <input type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
       <button type="submit">Buat Catatan</button>
     </form>
   )
 }
}
 
export default PersonalNotesInput;