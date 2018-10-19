import React from 'react';
import { HomeBorrower } from 'containers';

class WallBorrower extends React.Component {
    render() {        
        return(
            <HomeBorrower borrower={this.props.params.borrower}/>
        );
    }
}

export default WallBorrower;
