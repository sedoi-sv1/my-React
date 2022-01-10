import React from 'react';

import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чём вы думаете сейчас ?'
                className='form-control new-post-label'
            />
            <botton 
                type='submit'
                className='btn btn-outline-secondary'>
                Добавить
            </botton>

        </form>
    )
}

export default PostAddForm;