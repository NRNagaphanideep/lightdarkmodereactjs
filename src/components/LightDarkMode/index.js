// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
    state = {
      isDarkMode : true,
    }

    onClickButton = () => {
        this.setState(prevState =>({isDarkMode: !prevState.isDarkMode}))
    }

    render() {
        const {isDarkMode} = this.setState
        const anotherClassName = isDarkMode ? 'dark-mode' : 'light-mode'
        const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
        return (
            <div className="bg-container">
                <div className={`container ${anotherClassName}`}>
                    <h1 className="heading">Click to Change Mode</h1>
                    <button className="button" 
                    onClick={this.onClickButton} >
                    {buttonText}
                    </button>
                </div>
            </div>
        )
    }
}

export default LightDarkMode
