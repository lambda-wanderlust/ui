import React, { Component } from 'react';

import Modal from './components/Modal/Modal';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Contact Us</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Give Us Some Feedback 

                        <form action="/action_page.php">
                        <p>First name:</p>
                        <input type="text" name="firstname" value=""/>

                        <p>Last name:</p>
                        <input type="text" name="lastname" value=""/>
                        <br></br>
                        <p>Your Comments for the Wanderlust Team</p>
                        <input class="input" type="text" name="comments"  value=""/>
                        <br></br>
                        <input type="submit" value="Submit"/>
                        </form> 
                </Modal>
            </div>
        );
    }
}
const domContainer = document.querySelector('.open-modal-btn');
ReactDOM.render(e(App), domContainer);

export default App;
