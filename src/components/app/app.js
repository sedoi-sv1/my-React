import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';


const App = () => {

    const data = [
        {label:'Going' , important: true, id: 'qwqw' },
        {label:'That' , important: false,id: 'werr'},
        {label:'I heed' , important: false, id: 'fdfdf' }
        
    ];

    return (
        <div className = "app">
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/> 
        </div>
    )
}

export default App;