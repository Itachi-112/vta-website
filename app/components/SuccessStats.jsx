"use client"
import React from 'react';
import CountUp from 'react-countup';

// Import icons (you can choose others from react-icons.github.io)
import { IoSchoolSharp, IoGlobeOutline, IoCheckmarkDoneCircleOutline, IoRibbonOutline } from 'react-icons/io5';

import './SuccessStats.css';

const SuccessStats = () => {

  // Data for the stats items
  const stats = [
    {
      icon: <IoSchoolSharp />,
      color: '#ffcdd2', // Light red
      iconColor: '#c62828', // Dark red
      end: 300,
      suffix: '+',
      label: 'Students placed in top universities',
    },
    {
      icon: <IoGlobeOutline />,
      color: '#bbdefb', // Light blue
      iconColor: '#1565c0', // Dark blue
      end: 50,
      suffix: '+',
      label: 'Global university partnerships',
    },
    {
      icon: <IoCheckmarkDoneCircleOutline />,
      color: '#c8e6c9', // Light green
      iconColor: '#2e7d32', // Dark green
      end: 90,
      suffix: '%',
      label: 'Visa approval success rate',
    },
    {
      icon: <IoRibbonOutline />,
      color: '#fff9c4', // Light yellow
      iconColor: '#f9a825', // Dark yellow
      text: 'Several', // Special case for non-number
      label: 'scholarships secured',
    },
  ];

  return (
    <section className="success-section">
      <div className="success-content">
        <h2>Discovering Our Biggest Successes: The Stories Behind Our Great Achievements</h2>
        <p className="success-subtitle">
          Embarking on a journey to reunite families, we recently had the privilege of assisting a
          couple in securing their spouse's visa.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon-wrapper" style={{ backgroundColor: stat.color }}>
                <span style={{ color: stat.iconColor }}>{stat.icon}</span>
              </div>
              <div className="stat-text">
                <h3>
                  {stat.text ? (
                    stat.text
                  ) : (
                    <>
                      <CountUp end={stat.end} duration={2.5} />
                      {stat.suffix}
                    </>
                  )}
                </h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStats;