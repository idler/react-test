import React, {Component} from "react";
import {connect} from "react-redux";

class HeadCaption extends Component {
    render() {

        let caption
        if (this.props.caption.isVisible) {
            caption = <div>The Title</div>

        }
        console.log(this.props, caption)
        console.log('---')

        return (<div>
                {caption}
                <button style={{position: 'fixed', top: '200px', left: '200px'}} onClick={this.props.toggle}>toggle
                </button>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    caption: state.caption
})

const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch({type: 'TOGGLE'})
})

export default connect(mapStateToProps, mapDispatchToProps)(HeadCaption)