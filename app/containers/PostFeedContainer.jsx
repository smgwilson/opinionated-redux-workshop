import { connect } from 'react-redux'
import PostFeed from 'components/PostFeed'


const mapStateToProps = (state, ownProps) => {
    return {
        // ??? fix me
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (creatorId) => {
            // ??? fix me
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)
