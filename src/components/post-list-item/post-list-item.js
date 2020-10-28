import React, { Component } from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    //поскольку о состоянии state знает только конкретный объект, а нам нужно чтобы header знал состояние, мы убираем из данного класса конструктор и локальные функции onImportant() и onLike(). И будем работать с функциями onToggleImportant и onToggleLiked, которые пришли в этот компонент из props.
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.onImportant = this.onImportant.bind(this);
    //     this.onLike = this.onLike.bind(this);
    // }
    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }
    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        // const {important, like} = this.state;//теперь у нас нет state и нам не нужно получать оттуда какие-то данные
        let classNames = "app-list-item d-flex justify-content-between";

        if(important) {
            classNames += ' important';
        }
        if(like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                // onClick={this.onLike}
                onClick={onToggleLiked}
                >                
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm"
                    // onClick={this.onImportant}
                    onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}

//выше переписываем данную функцию в класс, чтобы компонент мог знать и помнить свои состояния (лайки и выделение постов в приложении). После создания ф-ий onToggleImportant и onToggleLiked в app.js можно вновь компонент из класса переделать в функцию, т.к. он больше не хранит никаких состояний.

// const PostListItem = ({label, important = false}) => {

//     let classNames = "app-list-item d-flex justify-content-between";
//     if(important) {
//         classNames += ' important';
//     }

//     return (
//         <div className={classNames}>
//             <span className="app-list-item-label">
//                 {label}
//             </span>
//             <div className="d-flex justify-content-center align-items-center">
//                 <button type="button" className="btn-star btn-sm">
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button type="button" className="btn-trash btn-sm">
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//                 <i className="fa fa-heart"></i>
//             </div>
//         </div>
//     );
// };

// export default PostListItem;