import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';
import ListDetails from './ListDetails';
import NewList from './NewList';

const AllList = () => {
  const { lists, newListForm } = useContext(WonderItemContext);
  return (
    <>
      {newListForm && <NewList />}
      {lists.length ? lists.map((list) => <ListDetails list={list} key={list.id} />) : null}
    </>
  );
};

export default AllList;