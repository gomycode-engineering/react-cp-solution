import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: `Jon Snow`,
      imgSrc: `https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/f/fa/Jon_Snow.png/revision/latest/scale-to-width-down/334?cb=20190525012401&path-prefix=fr`,
      profession: `The King in the North`,
      bio: `Jon Snow, born Aegon Targaryen, 
      is the son of Lyanna Stark and Rhaegar 
      Targaryen, the late Prince of Dragonstone.
       From infancy, Jon is presented as the bastard 
       son of Lord Eddard Stark, Lyanna's brother, 
       and raised alongside his lawful children at Winterfell, 
       the seat of House Stark. However, his true parentage is 
       kept secret from everyone, including Jon himself, in order 
       to protect him from those that sought the complete annihilation 
       of House Targaryen after Robert's Rebellion and to maintain 
       order in the realm.`,
    },
    show: false,
    timer: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div className='container'>
        {this.state.show && (
          <div className='col md-8'>
            <div className='row justify-content-center'>
              <h1>{this.state.person.fullName}</h1>
            </div>
            <div className='row justify-content-center'>
              <h5>{this.state.person.profession}</h5>
            </div>
            <div className='row'>
              <img
                className='rounded mx-auto d-block'
                src={this.state.person.imgSrc}
                alt='profile'
              />
            </div>
            <div className='row'>
              <p>{this.state.person.bio}</p>
            </div>
          </div>
        )}
        <div className='row justify-content-center'>
          <h1>Life time</h1>
        </div>
        <div className='row justify-content-center'>
          <p>{this.state.timer}</p>
        </div>
        <div className='row justify-content-center'>
          <button
            className='btn outline-danger '
            onClick={() => this.setState({ show: !this.state.show })}
          >
            ClickMe
            <span role='img' aria-label='jap goblen'>
              👺
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
