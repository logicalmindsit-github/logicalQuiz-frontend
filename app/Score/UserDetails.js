"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState("6");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching user data...");
      try {
        const accessToken = localStorage.getItem("accessToken");
        

        const response = await axios.get("https://logical-quiz-backend-43lpx.ondigitalocean.app/report/getReport",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              standard: selectedGrade,
            },
          }
        );
        console.log("API Response:", response.data);
        if (response.status === 200) {
          setUserData(response.data.data);
        } else {
          console.log("Error fetching user data:", response.data.error);
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
    console.log("Selected Grade:", e.target.value);
  };

  return (
    <div className="flex flex-col max-w-full">
      <div className="flex flex-row items-center justify-between px-6 py-4 border-b">
        <select
          value={selectedGrade}
          onChange={handleGradeChange}
          className="px-3 py-1 border border-gray-400 rounded-md"
        >
           
          <option value="6">Grade 6</option>
           
        </select>
      </div>
      {userData ? (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Marks</th>
              <th className="px-6 py-3 text-left">Is Completed</th>
              <th className="px-6 py-3 text-left">Time Spent</th>
              <th className="px-6 py-3 text-left">Last Practised</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-3 text-left">{item.marks}</td>
                <td className="px-6 py-3 text-left">
                  {item.isCompleted ? "Completed" : "Not Completed"}
                </td>
                <td className="px-6 py-3 text-left">
                  {item.timeSpent} seconds
                </td>
                <td className="px-6 py-3 text-left">
                  {new Date(item.lastPractised).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-4">Loading...</p>
      )}
    </div>
  );
}