import React from 'react';
import { browserHistory, Link } from 'react-router';

class SearchPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlekeyDown = this.handleKeyDown.bind(this);

        // LISTEN ESC KEY, CLOSE IF PRESSED
        // const listenEscKey = (evt) => {
        //     evt = evt || window.event;
        //     if (evt.keyCode == 27) {
        //         this.handleClose();
        //     }
        // };

        // document.onkeydown = listenEscKey;

    }

    handleClose() {
        this.handleSearch('');
        document.onkeydown = null;
        // this.props.onClose();
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
        // this.handleSearch(e.target.value);
    }

    handleSearch(keyword) {
        this.props.onSearch(keyword);
    }

    handleKeyDown(e) {
        // IF PRESSED ENTER, TRIGGER TO NAVIGATE TO THE FIRST USER SHOWN
                if(e.keyCode === 13) {
                    if(e.target.value.length > 0) {
                        browserHistory.push('/wall/' + e.target.value);
                        // this.handleClose();
                    }
                    else{
                        browserHistory.push('/');
                    }

                }
    }

    render() {

        const mapToComponents = data => {
            return data.map((memo, i) => {
                return (
                    <Memo
                        data={memo}
                        ownership={ memo.writer===this.props.currentUser }
                        key={memo._id}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                        onStar={this.props.onStar}
                        index={i}
                        currentUser={this.props.currentUser}
                    />
                );
            });
        };

        const mapDataToLinks = (data) => {
            return data.map((user, i) => {
                return (
                    <Link onClick={this.handleClose} to={`/wall/${user.username}`} key={i}>
                        {user.username}
                    </Link>
                );
            });
        };

        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <input 
                                type="text" 
                                id="autocomplete-input" 
                                className="autocomplete" 
                                value={this.state.keyword}
                                onChange={this.handleChange}
                                onKeyDown={this.handleKeyDown}
                            ></input>
                            <label for="autocomplete-input">Search a stuff</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SearchPanel.propTypes = {
    usernames: React.PropTypes.array
};

SearchPanel.defaultProps = {
    usernames: []
};

export default SearchPanel;
