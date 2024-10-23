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

import row6Column2 from "@/data/tables/column1&2/row6column2";
import React, { useState } from "react";

const RegisterMemberIdPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row6Column2.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row6Column2.slice(start, end));
    return row6Column2.slice(start, end);
  }, [page, row6Column2, 10, rowsPerPage]);

  return (
    <div>
      <CommonHeader title="고객만족도 상세조회" />
      <main className="mt-6 rounded-[20px] bg-white px-3">
        <h2 className="py-1"></h2>

        <article className="mt-6">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] py-4 px-4 text-center ",
              ],
              td: [
                "px-2 py-3 mt-5 text-center font-normal text-base text-[#363941]", // General td styles
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
              <TableColumn>이름(닉네임)</TableColumn>
              <TableColumn>아이디(이메일)</TableColumn>
              <TableColumn>문항1</TableColumn>
              <TableColumn>문항2</TableColumn>
              <TableColumn>문항3</TableColumn>
              <TableColumn>문항4</TableColumn>
              <TableColumn>문항5</TableColumn>
              <TableColumn>문항6</TableColumn>
              <TableColumn>문항7</TableColumn>
              <TableColumn>문항8</TableColumn>
              <TableColumn>문항9</TableColumn>
              <TableColumn>문항10</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.No}</TableCell>

                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.question1}</TableCell>
                  <TableCell>{row.question2}</TableCell>
                  <TableCell>{row.question3}</TableCell>
                  <TableCell>{row.question4}</TableCell>
                  <TableCell>{row.question5}</TableCell>
                  <TableCell>{row.question6}</TableCell>
                  <TableCell>{row.question7}</TableCell>
                  <TableCell>{row.question8}</TableCell>
                  <TableCell>{row.question9}</TableCell>
                  <TableCell>{row.question10}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
      <div className="mt-8 flex justify-between">
        <div></div>
        <button className="h-[50px] rounded-xl bg-[#424242] px-8 py-[14px] text-white">
          삭제
        </button>
      </div>
    </div>
  );
};

export default RegisterMemberIdPage;
