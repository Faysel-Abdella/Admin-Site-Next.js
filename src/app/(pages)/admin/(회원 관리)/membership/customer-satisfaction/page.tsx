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

import row4Column1 from "@/data/tables/column1&2/row4Column1";
import React, { useState } from "react";

import MainHead from "./head";
import BlueAndBlackBtn from "@/components/blueAndBlackBtn";

const CustomerSatisfactionPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const pages = Math.ceil(row4Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row4Column1.slice(start, end));
    return row4Column1.slice(start, end);
  }, [page, row4Column1, 5, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="고객만족도 등록" />
        <MainHead />
      </header>

      <main className="mt-6 rounded-[20px] bg-white px-5 py-6">
        <h2 className="text-center text-[20px] font-bold leading-[42px] text-mainBlack">
          8월 10일 예약현황
        </h2>

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
              <TableColumn>평가문항</TableColumn>
              <TableColumn>중복답변여부</TableColumn>
              <TableColumn>기타포함여부</TableColumn>
              <TableColumn>사용여부</TableColumn>
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

                  <TableCell>
                    <Link
                      href={`/admin/membership/customer-satisfaction/${row.id}`}
                      className="text-blue underline underline-offset-2"
                    >
                      {row.evaluationItem}
                    </Link>
                  </TableCell>
                  <TableCell className="text-danger">
                    {row.duplicateAnswer}
                  </TableCell>
                  <TableCell className="text-danger">{row.including}</TableCell>
                  <TableCell className="text-primary">
                    {row.weatherToUse}
                  </TableCell>
                  <TableCell>{row.language}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
        <div className="mt-8 flex justify-between">
          <div></div>
          <BlueAndBlackBtn />
        </div>
      </main>
    </section>
  );
};

export default CustomerSatisfactionPage;
