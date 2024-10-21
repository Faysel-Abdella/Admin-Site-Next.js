import React, { useState } from "react";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
  Link,
} from "@nextui-org/react";
import HeaderDropDown from "@/components/HeaderDropDown";

import row1Column3 from "@/data/tables/column1&2/row1Column3";
import row1Column3Columns from "@/data/columns/row1column3Columns";

const PaymentHistory = () => {
  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row1Column3.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row1Column3.slice(start, end));
    return row1Column3.slice(start, end);
  }, [page, row1Column3, viewValue, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <main className="mt-6 rounded-[20px] bg-white px-5 py-6">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-bold text-mainBlack">총 00건</p>

        <div className="flex items-center justify-center gap-3">
          <HeaderDropDown
            options={viewOptions}
            defaultSelectedKey={viewOptionsDefault}
            value={viewValue}
            setNewValue={setViewValue}
            styles="w-[139px] "
            mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
          />
        </div>
      </div>

      <article className="mt-5">
        <Table
          aria-label="Data Table"
          shadow="none"
          classNames={{
            th: [
              "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
            ],
            td: ["px-6  text-center font-normal text-base text-[#363941] "],
          }}
          bottomContent={
            <div className="mt-8 flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
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

            <React.Fragment>
              {row1Column3Columns.map((column) => (
                <TableColumn key={column.key}>{column.name}</TableColumn>
              ))}
            </React.Fragment>
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
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.paymentDate}</TableCell>
                <TableCell>{row.expirationDate}</TableCell>
                <TableCell>{row.paymentDate}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </main>
  );
};

export default PaymentHistory;
