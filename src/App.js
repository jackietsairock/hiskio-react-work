import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./assets/css/App.css";

import Game from "./Game";
import Header from "./loginModal/Header";
import ModalBox from "./loginModal/ModalBox";
import TodoList from "./hooksTodoList/TodoList";

import { Provider } from "./loginModal/context/context";

class App extends Component {
  state = {
    filter: "", //列表過濾使用
    lessons: [], //列表過濾使用
    modal: null, //context API跳窗使用
    login: false //context API跳窗使用
  };
  componentDidMount() {
    this.fetchLessons();
  }
  onChangeFilter = e => {
    const filter = e.target.value;
    this.setState({ filter }, this.fetchLessons);
  };
  fetchLessons = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const { filter } = this.state;
      fetch(`/api/lessons?filter=${filter}`)
        .then(rs => rs.json())
        .then(lessons => this.setState({ lessons }));
    }, 300); // debounce
  };
  render() {
    //列表過濾使用
    const { filter, lessons } = this.state;

    //context API跳窗使用
    const contextValue = {
      state: this.state,
      setState: this.setState.bind(this)
    };
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" className="p1 mb-3 p-3">
            <Row>
              <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                <h4>列表過濾:</h4>
                <input value={filter} onChange={this.onChangeFilter} />
                <ul className="filter_ul">
                  {lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}</li>
                  ))}
                </ul>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                <h4>井字遊戲:</h4>
                <Game />
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="12" lg="12" className="p2 p-3">
            <Row>
              <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                <h4>用 context API 實作跳窗:</h4>
                <Provider value={contextValue}>
                  <Header />
                  <ModalBox />
                </Provider>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                <h4>用 hooks 實作 TodoList:</h4>
                <TodoList />
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="12" lg="12" className="p2 p-3">
            <Row>
              <h4>Cookie Clicker 遊戲:</h4>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
