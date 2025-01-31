'use client';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Event from "../components/ui/Events/Event";
import Modal from '../components/ui/muicomponents/Modal';
import 'react-toastify/dist/ReactToastify.css';
import useFetchData from './hooks/useFetchData';
import { getCategory } from './services/api';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EventsPage = () => {
  const router = useRouter();
  const handleFundRaisingClick = () => {
    router.push('/fund-raising'); // Navigate to the Fund Raising page
  };

  const apiRequests = useMemo(() => {
    return [getCategory]; // Assuming getCategory doesn't require any arguments
  }, []);

  const { data, isLoading, error } = useFetchData(apiRequests);

  // State to hold processed data
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0 && data[0].data && data[0].data.length > 0) {
      // Process data to extract id, name, title
      const processed = data[0].data.map(item => ({
        id: item.idspevent,
        name: item.speventTitle, // Assuming 'name' is equivalent to 'speventTitle'
        title: item.speventTitle, // Assuming 'title' is the same as 'name'
        categoryImages: item.image_url,
      }));
      setProcessedData(processed);
    }
  }, [data]); // Effect runs whenever 'data' changes

  // Render loading skeleton
  const renderSkeleton = () => (
    Array(5).fill(0).map((_, index) => (
      <div className="item" key={index}>
        <div className="img-wrapper" style={{position: "relative", width: '120px', height: '120px'}}>
          <Skeleton height={'120px'} width={'120px'} />
        </div>
        <Skeleton width={'80%'} />
      </div>
    ))
  );

  return (
    <div className="event-wrapper">
      <div className="event-body">
        <div className="top-heading">
          <div className="top-name">Events</div>
          <Link href="/my-events">
            <button className="top-btn">Dashboard</button>
          </Link>
        </div>
        <div className="menu-filter">
          {/* Hardcoded Fund Raising Card */}
          <Link
            href="/fundraising"
            className="item"
            onClick={handleFundRaisingClick}
          >
            <div className="img-wrapper">
              <img src="./images/fund-raising.svg" alt="Fund Raising" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <span>Fund Raising</span>
          </Link>

          {/* Render loading skeleton or actual categories */}
          {isLoading ? renderSkeleton() : 
            processedData.map((category) => (
              <Link
                href={`/category/${category.id}`}
                className="item"
                key={category.id}
              >
                <div className="img-wrapper" style={{position:"relative"}}>
                  <Image
                    src={category.categoryImages}
                    alt={category.name}
                   height={60}
                   width={60}
                  />
                </div>
                <span>{category.name}</span>
              </Link>
            ))
          }
        </div>
        <div className="filters">
          <div className="search-box">
            <input type="text" placeholder="Search Events by keyword" />
            <div className="search-icon">
              <img src="./images/search-3.svg" alt="Search" />
            </div>
          </div>
          <div className="change-location">
            <Modal />
            <div className="location">Rawalpindi, Punjab, Pakistan</div>
          </div>
        </div>
        <div>
          <div className="event-box-wrapper">
            <Event />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;