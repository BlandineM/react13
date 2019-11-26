import React from 'react'

export default class FormEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
    
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      
      submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
          const url = "https://post-a-form.herokuapp.com/api/movies/";
          fetch(url, config)
          .then(res => res.json())
            .then(res => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`Un nouveau film a été ajouté avec l'ID ${res.id}!`);
              }
            }).catch(e => {
              console.error(e);
              alert('Erreur lors de l\'ajout d\'un film');
            });
      }
      
      
    render(){
        return(
            <div className="FormEmployee">
  <h1>Mon film préféré !</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Informations</legend>
      <div className="form-data">
        <label htmlFor="title">Nom du film</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="poster">URL de l'affiche</label>
        <input
          type="text"
          id="firstname"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment">Un petit mot </label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Envoyer" />
      </div>
    </fieldset>
  </form>
</div>
        )
    }
}