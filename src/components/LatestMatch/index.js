// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      result,
      umpires,
      venue,
    } = latestMatch
    return (
      <div className="latest-match-container">
        <h1 className="latest-heading">Latest Matches</h1>
        <div className="match-container">
          <div className="competing-team-date-venue-container">
            <h1 className="competing_team">{competingTeam}</h1>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="competing-logo"
            alt={`latest match ${competingTeam}`}
          />
          <div className="innings-umpire-container">
            <div className="first-innings-container">
              <p className="innings-first">First Innings</p>
              <p className="innings-first-team">{firstInnings}</p>
            </div>
            <div className="second-innings-container">
              <p className="innings-first">Second Innings</p>
              <p className="innings-first-team">{secondInnings}</p>
            </div>
            <div className="second-innings-container">
              <p className="umpire-heading">Man Of The Match</p>
              <p className="paragraph">{manOfTheMatch}</p>
            </div>
            <div className="second-innings-container">
              <p className="umpire-heading">Umpire</p>
              <p className="paragraph">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
