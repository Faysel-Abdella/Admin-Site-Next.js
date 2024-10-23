"use client";
import CommonHeader from "@/components/CommonHeader";
import {
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";

import row1Column3 from "@/data/tables/column3/row1column3";
import React, { useState } from "react";


const ConnectionInfoIdPage = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row1Column3.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row1Column3.slice(start, end));
    return row1Column3.slice(start, end);
  }, [page, row1Column3, 10, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section className="font-noto">
      <header>
        <CommonHeader title="고객예약 상세현황" />
      </header>
      <h3 className="my-8 text-mainGray">
        예약일자 <br /> 2024.08.01
      </h3>
      <main className="mt-6 rounded-[20px] bg-white px-5 py-6">
        <h2 className="py-1"></h2>

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
              <TableColumn>예약시간</TableColumn>
              <TableColumn>방장</TableColumn>
              <TableColumn>전화 번호</TableColumn>
              <TableColumn>단체방명</TableColumn>
              <TableColumn>인원수</TableColumn>
              <TableColumn>개항장거리</TableColumn>
              <TableColumn>차이나타운</TableColumn>
              <TableColumn>동화마을</TableColumn>
              <TableColumn>자유공원</TableColumn>
              <TableColumn>전 구간</TableColumn>
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

                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.roomManager}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.groupRoom}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell className="text-blue">
                    {row.openPortDistance}
                  </TableCell>
                  <TableCell className="text-red-600">
                    {row.chinaTown}
                  </TableCell>
                  <TableCell className="text-blue">
                    {row.FairyVillage}
                  </TableCell>
                  <TableCell className="text-red-600">
                    {row.freedomPark}
                  </TableCell>
                  <TableCell className="text-blue">{row.allSection}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
        <div className="mt-8 flex justify-between">
          <div></div>
          <button className="h-[50px] rounded-xl bg-[#424242] px-8 py-[14px] text-white">
            삭제
          </button>
        </div>
      </main>
    </section>
  );
};

export default ConnectionInfoIdPage;
