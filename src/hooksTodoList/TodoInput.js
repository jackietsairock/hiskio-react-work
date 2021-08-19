import React, { useState, useEffect, useRef } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const TodoInput = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChangeText = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addItem(text);
    setText("");
  };

  //以下兩個  useEffect, useRef 用法說明:

  //1. useRef跟creatRef一樣
  const ref = useRef();

  //2. useEffect=componentDidMount及componentUpdate
  useEffect(() => {
    ref.current.focus();
  });
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="輸入文字"
          value={text}
          onChange={onChangeText}
          ref={ref}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoInput;
