import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  textChange: TextChange;
  handleComposition: (e: React.CompositionEvent<HTMLInputElement>) => void;
  keyDownEvent: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  cancelEdit: NoReturn;
}

export const EditableTodo: React.FC<Props> = ({ value, textChange, handleComposition, keyDownEvent, cancelEdit }) => {
  // 編集可能な状態にレンダリングされたDOMに対してfocusイベントを発生させるためのref
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      // レンダーされた後のDOMにフォーカスを当てる
      inputRef.current.focus();
    }
  },[]);

  return (
    // 編集ボタンを押した直後、このポンポーネントがレンダーリンクされる
    <InputWrapper
      ref={inputRef}
      type="text"
      value={value}
      onChange={e => { textChange(e.target.value) }}
      onCompositionStart={e => { handleComposition(e) } }
      onCompositionUpdate={e => { handleComposition(e) } }
      onCompositionEnd={e => { handleComposition(e) } }
      onKeyDown={e => { keyDownEvent(e) }}
      onBlur={() => { cancelEdit() } }
    />
  )
};


const InputWrapper = styled.input`
  width: 86%;
  border: 0px;
  border-radius: 5px;
  margin-left: 41px;
  font-size: 18px;
  background-color: palegoldenrod;
`
