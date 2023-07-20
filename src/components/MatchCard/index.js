// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchCardDetails} = this.props
    const {
      competingTeamLogo,
      competingTeam,
      result,
      matchStatus,
    } = matchCardDetails
    return (
      <li className="match-card-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="img-logo"
        />
        <p className="team-name">{competingTeam}</p>
        <p className="team-result">{result}</p>
        <p className="team-status">{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
