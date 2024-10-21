"use client";
import CommonHeader from "@/components/CommonHeader";
import {
  Checkbox,
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import row5Column5 from "@/data/tables/column3/row5column5";
import React, { useState } from "react";

import MainHead from "./head";
import BlueAndBlackBtn from "@/components/blueAndBlackBtn";

const GameProgressPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row5Column5.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row5Column5.slice(start, end));
    return row5Column5.slice(start, end);
  }, [page, row5Column5, 5, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="게임진행 현황" />
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
              <TableColumn>No</TableColumn>
              <TableColumn>투어일자</TableColumn>
              <TableColumn>투어시간</TableColumn>
              <TableColumn>단체방명</TableColumn>
              <TableColumn>진행상태</TableColumn>
              <TableColumn>방장</TableColumn>
              <TableColumn>인원수</TableColumn>
              <TableColumn>등급</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.No}</TableCell>

                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.tourTime}</TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      href={`/admin/membership/customer-satisfaction/${row.id}`}
                      className="text-blue underline underline-offset-2"
                    >
                      {row.groupRoom}
                    </Link>
                  </TableCell>

                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.progress}
                  </TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.roomManager}
                  </TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.numberOfPeople}
                  </TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
      <div className="mt-8 flex justify-between">
        <div></div>
        <BlueAndBlackBtn />
      </div>
    </section>
  );
};

export default GameProgressPage;
