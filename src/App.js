import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchElement: '', userDetailsList: initialUserDetailsList}

  searchBarChange = event => {
    this.setState({searchElement: event.target.value})
  }

  onDeleteUser = props => {
    const {userDetailsList} = this.state
    const filteredUsers = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== props,
    )
    this.setState({userDetailsList: filteredUsers})
  }

  render() {
    const {searchElement, userDetailsList} = this.state

    const searchList = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchElement),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchElement}
          onChange={this.searchBarChange}
        />
        <ul className="list-container">
          {searchList.map(eachUser => (
            <UserProfile
              onDeleteUser={this.onDeleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
