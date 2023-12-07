import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const Header = () => {
  const { lists, newListForm, showNewListForm } = useContext(WonderItemContext);
  const lastUpdatedOn = Math.max(...lists.map((list) => list.lastUpdated));

  const humanTime = (ts) => {
    const d = new Date(ts);
    const date = d.toDateString().slice(0, -5);
    let hour = d.getHours();
    let min = d.getMinutes();
    let ampm = 'am';
    if (hour > 12) {
      hour -= 12;
      ampm = 'pm';
    }
    min = min < 10 ? `0${min}` : min;
    const time = `${hour}:${min} ${ampm}`;
    return `${date}, ${time}`;
  };

  return (
    <div className="header">
      <div className="text">
        <h3>Lista-De-Tareas</h3>
        {lists.length ? (
          <p>Updated {humanTime(lastUpdatedOn)}</p>
        ) : (
          <p>It's empty. Add new list first</p>
        )}
      </div>
      <div className="new-list-btn">
        <button
          type="button"
          title="Add List"
          onClick={() => showNewListForm(() => !newListForm)}
          disabled={newListForm}
        >
          New List
        </button>
      </div>
    </div>
  );
};

export default Header;
