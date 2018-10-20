import React from 'react';
import TimeAgo from 'react-timeago';
import { browserHistory, Link } from 'react-router';
import { Confirm } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MemoDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: props.data.contents,
            confirm: false
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleStar = this.handleStar.bind(this);
        this.enterDetail = this.enterDetail.bind(this);
        this.toggleConfirm = this.toggleConfirm.bind(this);
    }

    toggleConfirm() {
        console.log("toggleConfirm : " + this.state.confirm)
        this.setState({
            confirm: !this.state.confirm
        });
    }

    componentDidMount() {
        // WHEN COMPONENT MOUNTS, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN REFRESHED)
        $('#dropdown-button-'+this.props.data._id).dropdown({
            belowOrigin: true // Displays dropdown below the button
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        let current = {
            props: this.props,
            state: this.state
        };

        let next = {
            props: nextProps,
            state: nextState
        };

        let update = JSON.stringify(current) !== JSON.stringify(next);
        return update;
    }

    componentDidUpdate(prevProps, prveState) {
        // WHEN COMPONENT UPDATES, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN LOGGED IN)
        $('#dropdown-button-'+this.props.data._id).dropdown({
            belowOrigin: true // Displays dropdown below the button
        });

        if(this.state.editMode) {
            // Trigger key up event to the edit input so that it auto-resizes (Materializecss Feature)
            $(this.input).keyup();
        }
    }

    toggleEdit() {
        if(this.state.editMode) {
            let id = this.props.data._id;
            let index = this.props.index;
            let contents = this.state.value;

            this.props.onEdit(id, index, contents).then(() => {
                this.setState({
                    editMode: !this.state.editMode
                });
            });
        } else {
            this.setState({
                editMode: !this.state.editMode
            });
        }

    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleRemove() {
        const id = this.props.data._id;
        const index = this.props.index;

        this.props.onRemove(id, index);
    }

    handleStar() {
        const id = this.props.data._id;
        const index = this.props.index;

        this.props.onStar(id, index);
    }

    enterDetail(){
        browserHistory.push('/detail/' + this.props.data._id);
    }

    render() {
        var { data, ownership } = this.props;

        const dropDownMenu = (
            <div className="option-button">
                <a className='dropdown-button'
                     id={`dropdown-button-${data._id}`}
                     data-activates={`dropdown-${data._id}`}>
                    <i className="material-icons icon-button">more_vert</i>
                </a>
                <ul id={`dropdown-${data._id}`} className='dropdown-content'>
                    <li><a onClick={this.toggleEdit}>Edit</a></li>
                    <li><a onClick={this.handleRemove}>Remove</a></li>
                </ul>
            </div>
        );

        // EDITED info
        const editedInfo = (
            <span style={{color: '#AAB5BC'}}> · Edited <TimeAgo date={this.props.data.date.edited} live={true}/></span>
        );

        const starStyle = (this.props.data.starred.indexOf(this.props.currentUser) > -1) ? { color: '#ff9980' } : { };

        const memoView = (
            <div className="card">
                    <div className="info">
                    <div className="info a-fixed-left-grid">
                        <img class="responsive-img" src={data.tumbnail}></img>
                    <div className="info right">
                        <Link to={`/wall/${this.props.data.writer}`} className="username">{data.writer}</Link> wrote a log · <TimeAgo date={data.date.created}/>
                        { this.props.data.is_edited ? editedInfo : undefined }
                        { ownership ? dropDownMenu : undefined }
                        </div>
                    </div>
                    </div>
                    <div className="card-content">
                        {data.contents}
                    </div>
                    <div className="footer">
                        <i className="material-icons log-footer-icon star icon-button" style={starStyle} onClick={this.handleStar}>star</i>
                        <span className="star-count">{data.starred.length}</span>
                        <a onClick={this.toggleConfirm} className="rent waves-effect waves-light btn right">Rent</a>
                    </div>
                    <div className="col s2 info">상품이름 : {data.name}</div>
                <div className="col s2 info">가격 : {data.price}</div>
                <div className="col s2 info">날짜 : {data.date.edited}</div>
                <div className="col s2 info">구입날짜 : {data.date.buy}</div>
                </div>
        );

        const editView = (
            <div className="write">
                <div className="card">
                    <div className="card-content">
                        <textarea
                            ref={ ref => { this.input = ref; } }
                            className="materialize-textarea"
                            value={this.state.value}
                            onChange={this.handleChange}></textarea>
                    </div>
                    <div className="card-action">
                        <a onClick={this.toggleEdit}>OK</a>
                    </div>
                </div>
            </div>
        );

        return(
            <div className="container memo">
               { this.state.editMode ? editView : memoView }
               <ReactCSSTransitionGroup transitionName="search" 
                    transitionEnterTimeout={300} 
                    transitionLeaveTimeout={300}>
                    { /* IMPLEMENT: SHOW SEARCH WHEN SEARCH STATUS IS TRUE */}
                    {this.state.confirm ? <Confirm onClose={this.toggleConfirm} data={this.props.data}/> : undefined }
                </ReactCSSTransitionGroup>
           </div>
        );
    }
}

MemoDetail.propTypes = {
    data: React.PropTypes.object,
    ownership: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    onRemove: React.PropTypes.func,
    onStar: React.PropTypes.func,
    currentUser: React.PropTypes.string
};

MemoDetail.defaultProps = {
    data: {
        item_id: 'id12367890',
        name: 'none',
        price: 'none',
        category: 'none',
        isAvailable: 'false',
        rate: '0',
        writer: 'none',
        borrower: 'none',
        contents: 'Contents',
        starred: [],
        date: { edited: new Date(), created: new Date() },
        is_edited: false,
        tumbnail: '',
        image: '',
        deliveryMethod:'none'
    },
    ownership: true,
    onEdit: (id, index, contents) => {
        console.error('onEdit not defined');
    },
    onRemove: (id, index) => {
        console.error('onRemove not defined');
    },
    onStar: (id, index) => {
        console.error('onStar not defined');
    },
    currentUser: ''
};

export default MemoDetail;