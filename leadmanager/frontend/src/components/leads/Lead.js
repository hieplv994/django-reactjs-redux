import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads } from '../../action/leads'

export class Lead extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getLeads()
    }

    render() {
        return (
           <Fragment>
               
           </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads })(Lead)
