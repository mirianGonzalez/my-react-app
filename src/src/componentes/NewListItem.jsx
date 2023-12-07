import React, { useContext, useState } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const NewListItem = ({ listId, onFocusOut }) => {
  const { dispatch } = useContext(WonderItemContext);
  const [itemName, setItemName] = useState('');

  const keyPressed = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onFocusOut();
    if (itemName.trim().length === 0) return;
    dispatch({
      type: 'ADD_LIST_ITEM',
      payload: {
        listId,
        itemName,
        completed: false,
      },
    });
    setItemName('');
  };
  return (
    <div className="list-item new">
      <input
        className="inp-cbx"
        id="cbxNew"
        type="checkbox"
        style={{ display: 'none' }}
        disabled
      />
      <label className="cbx" htmlFor="cbxNew">
        <span></span>
        <span>
          <input
            type="text"
            autoFocus
            value={itemName}
            onBlur={handleSubmit}
            className="new-item-input"
            placeholder="Type item name"
            onChange={(e) => setItemName(e.target.value)}
            onKeyPress={keyPressed}
          />
        </span>
      </label>
    </div>
  );
};

export default NewListItem;
