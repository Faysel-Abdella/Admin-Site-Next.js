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

import row2Column1 from "@/data/tables/column1&2/row2Column1";
import React, { useState } from "react";

import MainHead from "./head";
import BlueAndBlackBtn from "@/components/blueAndBlackBtn";

const RegisterMember = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row2Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row2Column1.slice(start, end));
    return row2Column1.slice(start, end);
  }, [page, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="2024년 8월 회원 현황" />
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
              <TableColumn>이름(닉네임)</TableColumn>
              <TableColumn>아이디(이메일)</TableColumn>
              <TableColumn>휴대폰 번호</TableColumn>
              <TableColumn>가입일</TableColumn>
              <TableColumn>출생년도</TableColumn>
              <TableColumn>성별</TableColumn>
              <TableColumn>회원상태</TableColumn>
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
                      href={`/admin/membership/register-member/${row.id}`}
                      className="text-blue underline underline-offset-2"
                    >
                      {row.NickName}
                    </Link>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.dateJoining}</TableCell>
                  <TableCell>{row.birthYear}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.status}</TableCell>
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

export default RegisterMember;
