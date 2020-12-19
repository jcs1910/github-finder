import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Searching...'
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            name='text'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;

// import React from 'react';

// function Search() {
//   const state = {
//     text: '',
//   };

//   onChange = (e) => {

//   };

//   return (
//     <div>
//       <form className='form'>
//         <input
//           type='text'
//           name='text'
//           placeholder='Search Users...'
//           value={state.text}
//           onChange={onChange()}
//         ></input>
//         <input
//           type='submit'
//           value='Search'
//           className='btn btn-dark btn-block'
//         ></input>
//       </form>
//     </div>
//   );
// }

// export default Search;
