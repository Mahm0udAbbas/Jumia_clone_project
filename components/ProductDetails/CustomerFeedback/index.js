"use client"
import React from 'react';
import { FaStar } from "react-icons/fa";
import { ProgressBar } from 'react-bootstrap';
import { FiCheckCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const FeedbackList = () => {
  const now = 60;

  return (
    <div style={{ display: 'flex', flexDirection: 'column',  padding: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <h3 className='text-gray-700 hover:text-gray-900' style={{fontSize: '1.25rem', fontWeight: '500'}}>Verified Customer Feedback</h3>
      <div className='my-3 border-b border-gray-300'></div>
      <button style={{ backgroundColor: 'transparent', border: 'none', color: 'orange', display: 'flex', alignItems: 'center' }}>SEE ALL <IoIosArrowForward style={{ color: 'orange' }} /></button>
    </div>
    <div className='my-4 border-b border-gray-100 w-full'></div>
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: '0 0 30%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <p className='text-gray-700 hover:text-gray-900'>VERIFIED RATINGS (8)</p>
          <div style={{ backgroundColor: '#f2f2f2', padding: '10px', width: 'calc(100% - 20px)', textAlign: 'center', maxWidth: '200px' }}>
            <h2 style={{ color: '#ffd700', margin: 0 }}>4.3/5</h2>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
              <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
              <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
              <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
              <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
            </div>
            <p className='text-gray-700 hover:text-gray-900'>8 verified ratings</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 20px)', maxWidth: '200px' }}>
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div className="flex justify-between items-center w-full" key={index}>
                <span style={{ display: 'flex' }}>5 <FaStar style={{ color: '#ffd700', justifyContent: 'center' }} className='text-gray-700 hover:text-gray-900' />(5)</span>
                <ProgressBar now={now} className="bg-yellow" style={{ width: '60%', margin: '0 10px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px' }}>
          <p className='text-gray-700 hover:text-gray-900'>PRODUCT REVIEWS (1)</p>
          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
            <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
            <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
            <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
            <FaStar style={{ fontSize: '20px', color: '#ffd700' }} />
          </div>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }} className='text-gray-700 hover:text-gray-900'>حلوه</p>
          <p style={{ fontSize: '14px', marginBottom: '10px' }} className='text-gray-700 hover:text-gray-900'>الخامه حلوه بس الجلد بتاعها لو اخربشت بيعلم و لون بيغير مكان الخربشه لكن ف المجمل حلوه و مقاسها مناسب تمام ل freebuds 4i</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <p className='text-gray-700 hover:text-gray-900'>28-04-2022 by AH</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FiCheckCircle style={{ color: 'green', marginRight: '5px' }} />
              <p style={{ color: 'green', marginBottom: 0 }} className='text-gray-700 hover:text-gray-900'>Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default FeedbackList;
