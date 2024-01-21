import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
    /* constructor(props){
        super(props);
        this.state=({lat:null,errorMessage:''});

        
    } */
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(

            position => this.setState({ lat: position.coords.latitude }),

            (err) => this.setState({ errorMessage: err.message })

        )
    }
   
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>errorMessage:{this.state.errorMessage}</div>
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return (
            <Spinner message="please accept location request"/>
        )
    }
    render() {
       return(
         <div className='border red'>
               {this.renderContent()}
         </div>
       )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));