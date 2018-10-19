import React from 'react';
import { HomeCategory } from 'containers';

class WallCategory extends React.Component {
    render() {        
        return(
            <HomeCategory category={this.props.params.category}/>
        );
    }
}

export default WallCategory;
