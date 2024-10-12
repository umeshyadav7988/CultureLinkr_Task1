import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const form = this.formRef.current;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    this.setState({ isSubmitted: true });
    
    form.reset();
  };

  render() {
    return (
      <div className="App">
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
        {this.state.isSubmitted && <p>Message Sent to CultureLinkr</p>}
      </div>
    );
  }
}

export default App;
