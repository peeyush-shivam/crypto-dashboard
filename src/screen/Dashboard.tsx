import React from "react";
import CryptoTable from "../components/CryptoTable";

const Dashboard: React.FC = () => {
  return (
    <div className=" w-full h-fit flex flex-col gap-8">
      <div className=" text-3xl font-semibold text-gray-600">Dashboard</div>
      <div className="w-full h-fit">
        <CryptoTable />
      </div>
    </div>
  );
};

export default Dashboard;
