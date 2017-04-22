import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { Link } from 'react-router'


class Home extends Component {

    componentWillMount() {
        setTimeout(() => {
            console.log(' home page', this.props)
        }, 100)
    }

    // if (nextProp.isRegistered) {
    //     browserHistory.push('/home')
    // }

    render() {
        // console.log(this.props)
        return (
            <div>

                <h1>
                    Home page
                    <br />
                    {this.props.uesr.name}
                    {/*<Link to="/">home</Link>*/}

                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uesr: state.authUser,
        isLoggedin: state.isLoggedin
    }
}
export default connect(mapStateToProps, null)(Home)

