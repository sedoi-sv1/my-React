import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';


const App = () => {
    return (
        <div className = "app">
            <AppHeader/>
            <div>
                <SearchPanel/>
                <PostStatusFilter/>
            </div> 
        </div>
    )
}

export default App;