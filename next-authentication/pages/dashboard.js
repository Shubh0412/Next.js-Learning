import { useSession } from "next-auth/react";

function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {!session && <h1>You are not authorized</h1>}
      {session && status === "authenticated" && <h1>Dashboard</h1>}
    </>
  );
}

export default Dashboard;
