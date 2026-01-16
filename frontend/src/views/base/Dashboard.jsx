import React, { useState } from "react";
import UserSideBar from "../../components/UserSideBar";
import MainHeader from "../../components/Dashboard/MainHeader";
import ChartSection from "../../components/ChartSection";
import Stats from "../../components/Dashboard/Stats";
import TableRow from "../../components/Dashboard/TableRow";

export default function Dashboard() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen transition-all duration-500 overflow-auto ">
      {/* DASHBOARD GRID */}
      <div className="flex h-screen overflow-hidden">
        <UserSideBar
          collapsed={sideBarCollapsed}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <div className="flex-1 flex flex-col justify-start md:justify-around overflow-hidden bg-background">
          <MainHeader
            sideBarCollapsed={sideBarCollapsed}
            onToggleSidbar={() => setSideBarCollapsed(!sideBarCollapsed)}
          />
          <main className="flex-1 overflow-y-auto bg-transparent p-3 md:p-6 space-y-6 ">
            <Stats />
            <ChartSection />

            <TableRow />
          </main>
        </div>
      </div>
    </div>
  );
}
