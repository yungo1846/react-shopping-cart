import axios from 'axios';
import { useEffect, useState } from 'react';
import { STATUS_CODE, URL } from '../constants';
import { FORMAT_DATA } from '../services/formatData';
import useFetchingStatus from './useFetchingStatus';

const useOrders = () => {
  const [orders, setOrders] = useState<Orders>([]);
  const { loading, setLoading, responseOK, setResponseOK } = useFetchingStatus();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL.ORDERS);
        if (response.status !== STATUS_CODE.GET_SUCCESS) {
          throw new Error('주문 목록 조회 실패');
        }
        setOrders(FORMAT_DATA.ORDERS(response.data));
        setResponseOK(true);
      } catch (error) {
        setResponseOK(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading, setResponseOK]);

  return { orders, loading, responseOK };
};

export default useOrders;
