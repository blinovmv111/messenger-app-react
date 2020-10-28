import React, { Component } from 'react';

import './post-add-form.css';
// import { ThemeConsumer } from 'styled-components';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState ({
            text: e.target.value //в данном случае call-back ф-ю мы можем не передавать, потому что нам все равно выполнится этот код синхронно или асинхронно. И то что ввел пользователь никак не зависит от предыдущего значения.
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''//очищение input после нажатия кнопки Добавить
        });
    }

    render() {
        return (
            //тег form заменили на div, чтобы при отправке форма не перезагружалась
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}//чтобы элемент был контролируемым и input очищался после нажатия кнопки Добавить
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Добавить
                </button>
            </form>
        )
    }
}

//Выше перепишем компонент в класс. И вернем тег form вместо div, чтобы отслеживать событие submit

// const PostAddForm = ({onAdd}) => {
//     return (
//         //тег form заменили на div, чтобы при отправке форма не перезагружалась
//         <div className="bottom-panel d-flex">
//             <input
//                 type="text"
//                 placeholder="О чем вы думаете сейчас?"
//                 className="form-control new-post-label"
//             />
//             <button
//                 type="submit"
//                 className="btn btn-outline-secondary"
//                 onClick={() => onAdd('Hello')}
//             >
//                 Добавить
//             </button>
//         </div>
//     );
// };

// export default PostAddForm;