import { useState, useEffect, use } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setdashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setdashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboaard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
}

export default Dashboard;
