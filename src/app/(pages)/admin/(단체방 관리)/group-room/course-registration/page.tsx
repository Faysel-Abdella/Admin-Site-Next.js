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

import row2Column5 from "@/data/tables/column3/row2column5";
import React, { useState } from "react";

import MainHead from "./head";
import BlueAndBlackBtn from "@/components/blueAndBlackBtn";

const CourseRegistrationPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 4;

  const pages = Math.ceil(row2Column5.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row2Column5.slice(start, end));
    return row2Column5.slice(start, end);
  }, [page, row2Column5, 5, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="코스 등록" />
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
              <TableColumn className="flex items-center justify-center">
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page,
                        ),
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.number)
                              .includes(id),
                        ),
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className={`size-[14px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>
              <TableColumn>No</TableColumn>
              <TableColumn>코스명</TableColumn>
              <TableColumn>코스 순번</TableColumn>
              <TableColumn>코스 경로</TableColumn>
              <TableColumn>언어</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`size-[14px] rounded-[2px] text-center`}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number),
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell>{row.No}</TableCell>

                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      href={`/admin/membership/customer-satisfaction/${row.id}`}
                      className="text-blue underline underline-offset-2"
                    >
                      {row.courseName}
                    </Link>
                  </TableCell>
                  <TableCell>{row.courseNumber}</TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.courseRoute}
                  </TableCell>

                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.language}
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

export default CourseRegistrationPage;
