import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.css',
  shadow: true
})
export class HelloWorld {

  @Prop({ reflectToAttr: true }) firstname;
  @Prop({ reflectToAttr: true }) lastname;
  @Prop({ reflectToAttr: true }) birthyear;

  componentDidLoad() {
  }

  componentDidUnload() {
  }

  @Method()
  sayMyName() {
    alert(`Hello ${this.firstname} ${this.lastname}`);
  }

  render() {
    const age = new Date().getFullYear() - Number(this.birthyear);
    return ([
        <span>Hello</span>,
        <span class="firstname">{this.firstname}</span>,
        <span class="lastname">{this.lastname}</span>,
        <span>You are</span>,
        <span class="age">{age}</span>,
        <span>years old</span>,
        <button onClick={this.sayMyName.bind(this)}>say my name</button>
    ]);
  }
}