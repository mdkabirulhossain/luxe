/* eslint-disable @typescript-eslint/no-unused-vars */
// components/FlashSales/CountdownTimer.tsx
"use client";
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownTimer: React.FC = () => {
  // Hardcoded placeholders matching design for now
  const [timeLeft] = useState<TimeLeft>({
    days: '03',
    hours: '23',
    minutes: '19',
    seconds: '56',
  });

  return (
    <div className="flex items-end gap-4 sm:gap-5 select-none">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item, idx, arr) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-black mb-1">{item.label}</span>
            <span className="text-3xl sm:text-4xl font-bold tracking-wider text-black font-mono">
              {item.value}
            </span>
          </div>
          {idx !== arr.length - 1 && (
            <span className="text-red-400 text-3xl font-bold pb-1 select-none animate-pulse">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;