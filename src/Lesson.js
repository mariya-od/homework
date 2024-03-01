import { Component } from "react";
import check from './check.png';

export class Lesson extends Component {
    state={
        userInput: '',
        lesson: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === '') {
            alert ('Please enter an item')
        } else {
        let listArray = this.state.lesson;
        listArray.push(input);
        this.setState({lesson: listArray,userInput: ''})
    }
    }

    deleteItem () {
        let listArray = this.state.lesson;
        listArray = [];
        this.setState({lesson: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="Какие уроки я буду делать?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>

                <div className="container">
                    <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>

                <ul>
                    {this.state.lesson.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}><img src={check} width='30px' alt="check"/>{item}</li>
                    ))}
                </ul>

                <div className="container">
                    <button className="delete" onClick={() =>this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}