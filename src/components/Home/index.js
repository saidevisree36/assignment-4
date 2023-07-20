// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardElements()
  }

  getTeamCardElements = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(eachData => ({
      id: eachData.id,
      imageUrl: eachData.team_image_url,
      name: eachData.name,
    }))
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderTeamList = () => {
    const {teamData} = this.state
    return (
      <ul className="unordered-list-items">
        {teamData.map(eachData => (
          <TeamCard key={eachData.id} teamDataDetails={eachData} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-card-container">
        <div className="top-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="bottom-card-container">
          {isLoading ? this.renderLoading() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
