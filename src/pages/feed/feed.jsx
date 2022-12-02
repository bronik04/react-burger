import React, {useEffect} from 'react';
import OrderList from "../../components/order-list/order-list";
import styles from './feed.module.scss';
import Dashboard from "../../components/feed-dashboard/dashboard";
import {wsActions} from "../../services/slices/ws-slice";
import {useDispatch} from "react-redux";

const FeedPage = () => {
   const dispatch = useDispatch();
   const {connectionStart, connectionClosed} = wsActions;

  useEffect(() => {
    dispatch(connectionStart())

    return () => {
      dispatch(connectionClosed())
    }
  }, [])

  return (
    <main className={styles.feed__container}>
      <OrderList/>
      <Dashboard/>
    </main>
  );
};

export default FeedPage;
