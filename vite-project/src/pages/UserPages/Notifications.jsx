import React from 'react';
import Nav from '../UserPages/Usernav';

function NotificationsPage() {
  const notifications = [
    { text: "You have a new message from John", time: "2 mins ago" },
    { text: "Your order has been shipped", time: "10 mins ago" },
    { text: "Your password was changed successfully", time: "30 mins ago" },
    { text: "Reminder: Meeting at 3 PM", time: "1 hour ago" },
    { text: "New comment on your post", time: "2 hours ago" },
  ];

  return (
    <div>
        <Nav />
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Notifications</h1>

      {/* Notifications list */}
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
            <p className="text-gray-800">{notification.text}</p>
            <p className="text-gray-600 text-sm">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default NotificationsPage;
