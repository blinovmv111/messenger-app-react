import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPannel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this)

    }
    
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});// {term} тоже самое, что и {term: term}
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
            className = "form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onUpdateSearch}
            />
            )
    }
};

//так как данный компонент должен хранить состояние (то что ввел пользователь) выше перепишем его в виде класса
// const SearchPannel = () => {
//     return (
//         <input
//         className = "form-control search-input"
//         type="text"
//         placeholder="Поиск по записям"
//         />
//         );
// };

// export default SearchPannel;