"use client";
import CommonHeader from "@/components/CommonHeader";
import {
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import row2Column3 from "@/data/tables/column3/row2column3";
import React, { useState } from "react";
import MainHead from "./head";

const ConnectionInfoPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const pages = Math.ceil(row2Column3.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row2Column3.slice(start, end));
    return row2Column3.slice(start, end);
  }, [page, row2Column3, 5, rowsPerPage]);

  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="예약현황 조회" />
        <MainHead />
      </header>

      <main className="mt-6 rounded-[20px] bg-white px-5 py-6">
        <article>
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center ",
              ],
              td: [
                "px-6 py-3 text-center font-normal text-base text-[#363941]", // General td styles
              ],
            }}
            bottomContent={
              <div className="mt-8 flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader className="th-border-1">
              <TableColumn>일자</TableColumn>
              <TableColumn>예약건 수</TableColumn>
              <TableColumn>투어인원 수</TableColumn>
              <TableColumn>비고</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.numberOfReservation}</TableCell>
                  <TableCell>{row.numberOfParticipant}</TableCell>
                  <TableCell width={300}>{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default ConnectionInfoPage;
