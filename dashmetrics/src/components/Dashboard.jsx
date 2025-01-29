import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState({ followers: 0, engagement: 0, growth: 0 });

  useEffect(() => {
    // Fetch analytics data from backend
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((data) => setAnalytics(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div>
        <p>Followers: {analytics.followers}</p>
        <p>Engagement Rate: {analytics.engagement}%</p>
        <p>Growth: {analytics.growth}%</p>
      </div>
    </div>
  );
};

export default Dashboard;