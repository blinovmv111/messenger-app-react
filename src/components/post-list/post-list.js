import React from 'react';

import PostListItem from '../post-list-item';
// import {ListGroup} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        
        if(typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem 
                    {...itemProps}
                    /* выще используем новый синтаксис spread-object, т.к. в объекте props, совпадают название ключа и значения 
                    label={item.label} 
                    important={item.important}/> */
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}                
                    />               
                </li>
                )
            }
        function isEmpty(obj) {
            for(let key in obj)
            {
                return true;
            }
            return false;
        }        
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
        //  <ListGroup className="app-list">
        //  {elements}
        // </ListGroup>
    )
}

export default PostList;