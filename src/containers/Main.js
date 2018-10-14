import React from 'react';
import { SearchPanel, MainCards } from 'components';
import { searchRequest } from 'actions/search';
import { connect } from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false,
            initiallyLoaded: false
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(keyword) {
        this.props.searchRequest(keyword);
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

        return(
            <div className="wrapper">
                { typeof this.props.dataid !== 'undefined' ? wallHeader : undefined }
                
                <div className="searchBack">
                    <div className="searchContainer">
                    <SearchPanel onSearch={this.handleSearch}/>
                    </div>
                </div>

                <MainCards/>

            </div>
        );
    }
    
}

Main.PropTypes = {
};

Main.defaultProps = {
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
        searchRequest: (keyword) => {
            return dispatch(searchRequest(keyword));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);


