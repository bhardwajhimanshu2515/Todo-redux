
import React from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import './todolist.css'
class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editContact=this.editContact.bind(this);
         
        this.state = {
          title: '',
          desc:'',
          deadline:''
        }
      }
    
      handleChange(e){
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
      handleSubmit(e){
        e.preventDefault();
        let contact = {
          title:this.state.title,
          desc:this.state.desc,
          deadline:this.state.deadline
        }
        this.props.createContact(contact);
        this.setState({
          title:'',
          desc:'',
          deadline:''
        });
      }
      listView(data, index){
        return (
            <div id="todos">
                <div id="todo" key={index}>
                    <div id="info">
                        <div id="title">{data.title}</div>
                        <div id="desc">{data.desc}</div>
                        <div id="deadline">{data.deadline}</div>
                    </div>
                    <div id="buttons">
                        <button onClick={(e) => this.editContact(e,data, index)}>Edit</button>
                        <button onClick={(e) => this.deleteContact(e, index)}>Delete</button>
                        <button>Complete</button>
                    </div>
                </div>
            </div>
        )
      }
    
      deleteContact(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
      }
      editContact(e,data, index){
        e.preventDefault();
        this.setState({
          title:data.title,
          desc:data.desc,
          deadline:data.deadline
        });
        this.props.deleteContact(index);
      }
    render() {
        return (
            <div id="container">
              {this.props.contacts.map((contact, i) => this.listView(contact, i))}
                <div id="todoForm">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title" value={this.state.title} placeholder="Todo Title" class="forms" onChange={this.handleChange} /><br/>
                        <input type="text" name="desc" value={this.state.desc} placeholder="Todo Description" class="forms" onChange={this.handleChange} /><br/>
                        <input type="date" name="deadline" value={this.state.deadline} placeholder="Todo Deadline" class="forms" onChange={this.handleChange} /><br/>
                        <input type="submit" value="Add a Task" class="buttonz"></input>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);