"use client"
// import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Notification = () => {
  const notifications=[
    {
      disc: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      disc: "It is a long established fact that a reader will be distracted by the readable.",
      date: "24 Feb, 2025",
    },
    {
      disc: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      disc: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
  ]

  return (
    <div className="col-span-12 relative w-115 bg-white shadow-default dark:border-strokedark dark:bg-boxdark lg:col-span-4">
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {notifications.map((notification,key)=>(
            <li key={key}>
              <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" href="#" >
                <p className="text-sm">{notification.disc}</p>

                <p className="text-xs">{notification.date}</p>
              </Link>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default Notification;
