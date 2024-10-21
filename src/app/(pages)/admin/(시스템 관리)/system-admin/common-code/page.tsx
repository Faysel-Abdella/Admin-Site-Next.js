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

import row1Column4 from "@/data/tables/column4and5/row1column4";
import React, { useState } from "react";

import MainHead from "./head";

const CommonCodePage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 3;

  const pages = Math.ceil(row1Column4.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row1Column4.slice(start, end));
    return row1Column4.slice(start, end);
  }, [page, row1Column4, 10, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="투어시간 관리" />
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
              <TableColumn>메인코드</TableColumn>
              <TableColumn>코드이름</TableColumn>
              <TableColumn>사용유무</TableColumn>
              <TableColumn>비고</TableColumn>
              <TableColumn>서브코드 개수</TableColumn>
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
                  <TableCell>{row.mainCode}</TableCell>
                  <TableCell>{row.codeName}</TableCell>

                  <TableCell>
                    <Link
                      href={`/admin/system-admin/common-code/${row.id}`}
                      className="text-blue underline-offset-2"
                    >
                      {row.useOrNot}
                    </Link>
                  </TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell>{row.noOfSubCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
        <div className="mt-8 flex justify-between">
          <div></div>
          <div className="flex gap-5">
            <button className="h-[50px] rounded-xl bg-[#6D8EEB] px-8 py-[14px] text-white">
              등록
            </button>
            <button className="h-[50px] rounded-xl bg-[#6D8EEB33] px-8 py-[14px] text-[#6D8EEB]">
              수정
            </button>
            <button className="h-[50px] rounded-xl bg-[#424242] px-8 py-[14px] text-white">
              삭제
            </button>
            <button className=""></button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CommonCodePage;
