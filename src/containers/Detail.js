import React from 'react';
import { connect } from 'react-redux';
import {
    memoDetailRequest
} from 'actions/memo';
import { MemoDetail } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false,
            initiallyLoaded: false
        };
    }
    componentDidMount() {
    
        console.log("componentDidMount : " + this.props.params.dataid)

        this.props.memoDetailRequest(true, undefined, undefined, this.props.params.dataid).then(
            () => {
                this.setState({
                    initiallyLoaded: true,
                    isLast: true
                });
            }
        );
    
    }

    render() {

        const wallHeader = (
            <div>
                <a onClick={this.handleRefresh}>
                <div className="container wall-info">
                    <div className="card wall-info blue lighten-2 white-text">
                        <div className="card-content">
                            {this.props.dataid}
                        </div>
                    </div>
                </div>
                </a>
            </div>
        );

        const mapToComponents = data => {
			console.log(data)
            return (
                <MemoDetail
                    data={data[0]}
                    ownership={ data[0].writer===this.props.currentUser }
                    key={data[0]._id}
                    onEdit={this.props.onEdit}
                    onRemove={this.props.onRemove}
                    onStar={this.props.onStar}
                    index={0}
                    currentUser={this.props.currentUser}
                />
            );

        };


        return(
            <div className="wrapper">
                { typeof this.props.dataid !== 'undefined' ? wallHeader : undefined }
                <div>
                    {/* <ReactCSSTransitionGroup
                        transitionName="memo"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {mapToComponents(this.props.memoData)} */}
                        {/* {mapToComponents(this.props.data)} */}
                    {/* </ReactCSSTransitionGroup> */}
                    {mapToComponents(this.props.memoData)}
                </div>
            </div>
        );
    }
    
}

Detail.PropTypes = {
    dataid: React.PropTypes.string
};

Detail.defaultProps = {
    dataid: undefined
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.status.isLoggedIn,
        postStatus: state.memo.post,
        currentUser: state.authentication.status.currentUser,
        memoData: state.memo.list.data,
        listStatus: state.memo.list.status,
        isLast: state.memo.list.isLast,
        editStatus: state.memo.edit,
        removeStatus: state.memo.remove,
        starStatus: state.memo.star
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        memoDetailRequest: (isInitial, listType, id, dataid) => {
            return dispatch(memoDetailRequest(isInitial, listType, id, dataid));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Detail);
