import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

export class SmurfDisplay extends React.Component {

    componentDidMount(){
        this.props.getSmurfs()
    }

    render() {
        
        return(
            <div>
                {(this.props.error) && 
                    <div className="alert alert-danger" role="alert">
                        Oh Noooo.... Gargamel has captured the Smurfs!: {this.props.error}
                    </div>}

                {(this.props.isLoading || this.props.error)
                ? <h2>Loading Smurf Village...</h2> 
                : this.props.smurfs.map(smurf => {
                        return <Smurf smurf={smurf} key={smurf.id}/>
                    })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.loaderror
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.