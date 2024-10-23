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

import row5Column52 from "@/data/tables/column3/row5column52";
import React, { useState } from "react";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import { Input, Textarea } from "@nextui-org/react";

import BlueAndBlackBtn from "@/components/blueAndBlackBtn";

const GameProgressPage = () => {
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row5Column52.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row5Column52.slice(start, end));
    return row5Column52.slice(start, end);
  }, [page, row5Column52, 5, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <CommonHeader title="게임진행 현황" />

      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              단체방명
            </h3>
            <div>
              <Input
                placeholder="강남삼성초등학교"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">방장</h3>
            <div>
              <Input
                placeholder="홍길동"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">인원수</h3>
            <div>
              <Input
                placeholder="10"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="mb-2 text-nowrap font-bold text-mainGray">투어코스</h3>
          <Input
            placeholder="개항장거리 - 동화마을"
            type="text"
            onChange={() => {}}
            className="w-full rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
            disabled // Makes the input field disabled
          />
        </div>
      </div>

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
              <TableColumn>회원명</TableColumn>
              <TableColumn>현재코스</TableColumn>
              <TableColumn>현재 경유지</TableColumn>
              <TableColumn>아이디(이메일)</TableColumn>
              <TableColumn>휴대폰 번호</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.No}</TableCell>

                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      href={`/admin/membership/customer-satisfaction/${row.id}`}
                      className="text-blue underline underline-offset-2"
                    >
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.currentCourse}
                  </TableCell>
                  <TableCell>{row.currentTransitPoint}</TableCell>

                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.email}
                  </TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.phoneNumber}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
      <div className="mt-8 flex justify-end">
        <button className="h-[50px] rounded-xl bg-[#424242] px-8 py-[14px] text-white">
          삭제
        </button>
      </div>
    </section>
  );
};

export default GameProgressPage;
