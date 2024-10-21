"use client";
import CommonHeader from "@/components/CommonHeader";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import row3Column3 from "@/data/tables/column3/row3column3";
import React, { useState } from "react";
import MainHead from "./head";

const SalesStatusPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row3Column3.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row3Column3.slice(start, end));
    return row3Column3.slice(start, end);
  }, [page, row3Column3, rowsPerPage]);

  // Calculate total amount for current page
  const totalAmount = items.reduce(
    (acc, row) => acc + parseFloat(row.amount),
    0,
  );

  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="매출현황 조회" />
        <MainHead />
      </header>

      <main className="mt-6 rounded-[20px] bg-white px-5 py-6">
        <article>
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center",
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
              <TableColumn>이름</TableColumn>
              <TableColumn>결제금액</TableColumn>
              <TableColumn>단체방명</TableColumn>
              <TableColumn>인원</TableColumn>
              <TableColumn>결제방법</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.room}</TableCell>
                  <TableCell>{row.personnel}</TableCell>
                  <TableCell>{row.method}</TableCell>
                </TableRow>
              ))}
              {/* Footer row for total amount */}
              {/* <TableRow>
                <TableCell colSpan={5} className="text-right">
                  Total:
                </TableCell>
                <TableCell>{totalAmount}</TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default SalesStatusPage;
