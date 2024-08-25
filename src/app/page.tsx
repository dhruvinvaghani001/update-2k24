"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <div>
      <h1>Profile Page</h1>
      {session ? (
        <div>
          <h2>Welcome, {session.user?.name}!</h2>
          <p>Your email: {session.user?.email}</p>
          {session.user?.image && (
            <img
              src={session.user.image}
              alt="Profile Picture"
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          )}
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <p>No session data available.</p>
      )}
    </div>
  );
}
