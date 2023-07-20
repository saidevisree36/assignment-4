// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDataDetails} = this.props
    const {imageUrl, name, id} = teamDataDetails
    return (
      <Link to={`/team-matches/${id}`} className="link-route">
        <li className="team-list-items">
          <img src={imageUrl} alt={`${name}`} className="team-card-image" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
