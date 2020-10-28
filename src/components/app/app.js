import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPannel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';

//то же самое с использованием styled-components:
// import styled from 'styled-components';

// const AppBlock = styled.div`
//     margin: 0 auto;
//     max-width: 800px;
// `
//Мы так же можем стилизовать уже готовые компоненты и потом их использовать если понадобится:

// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `

// const App = () => {

//     const data = [
//         {label: 'Going to learn React', important: true, id: 'qwqw'},
//                 {label: 'That is so good', important: false, id: 'werr'},
//                 {label: 'I need a break...', important: false, id: 'fdfdf'}
//     ];

//     return (
//         <div className="app">
//             <AppHeader/>
//             <div className="search-panel d-flex">
//                 <SearchPannel/>
//                 <PostStatusFilter/>
//             </div>
//             <PostList posts={data}
//             onDelete = {id => console.log(id)}/>
//             <PostAddForm/>
//         </div>
//         //то же самое с использованием styled-components:
//         // <AppBlock>
//         //     <AppHeader/>
//         //     <div className="search-panel d-flex">
//         //         <SearchPannel/>
//         //         <PostStatusFilter/>
//         //     </div>
//         //     <PostList 
//         //     posts={data}
//         //     onDelete = {id => console.log(id)}/>
//         //     <PostAddForm/>
//         // </AppBlock>
//     )
// }

// export default App;

//Для возможности удаления постов, нам необходимо переписать компонент в виде класса, чтобы менять его состояние:

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {label: 'Going to learn React', important: true, like: false, id: 1},
            {label: 'That is so good', important: false, like: false, id: 2},
            {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deletItem=this.deletItem.bind(this);
        this.addItem=this.addItem.bind(this);
        this.onToggleImportant=this.onToggleImportant.bind(this);
        this.onToggleLiked=this.onToggleLiked.bind(this);
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
        this.onFilterSelect=this.onFilterSelect.bind(this);

        this.maxId = 4        
    }
    deletItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // data.splice(index, 1);//этим методом пользоваться нельзя, т.к. это нарушает принцип имутабельности
            // return {
            //     data: data 
            // }
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            // или так: const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }            
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]; 
            return {
                data: newArr
            }            
        })
    }

    onToggleImportant(id) {        
        const {data} = this.state;
        this.setState({ data: data.map(item => item.id === id ? {...item, important: !item.important} : item)})
    }

    onToggleLiked(id) {
        const {data} = this.state;
        this.setState({ data: data.map(item => item.id === id ? {...item, like: !item.like} : item)})      
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id ===id);
        //     const old = data[index];
        //     const newItem = {...old, like: !old.like};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newArr
        //     } 
        // })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {return item.label.indexOf(term) > -1
        });
    }

    filterPost (items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);//так как это просто метод класса его не нужно привязывать.

        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPannel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete = {this.deletItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked = {this.onToggleLiked}
                />
                <PostAddForm
                onAdd = {this.addItem}/>
            </div>     
        )
    }    
}

