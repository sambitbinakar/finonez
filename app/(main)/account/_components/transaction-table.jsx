"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { categoryColors } from "@/data/category";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import React from "react";

const TransactionTable = ({ transaction }) => {
  const filterSortedtransaction = transaction;

  const handleSort = () => {};
  return (
    <div className="space-y-4">
      <div className="rounded-md border bg-slate-50 text-black font-semibold">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-black font-semibold">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center text-black font-bold">
                  Date
                </div>
              </TableHead>
              <TableHead className="text-black font-bold">
                Description
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center text-black font-bold">
                  Category
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center justify-start text-black font-bold">
                  Amount
                </div>
              </TableHead>
              <TableHead className="text-black font-bold">Recurring</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterSortedtransaction.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-black">
                  No Transaction Found
                </TableCell>
              </TableRow>
            ) : (
              filterSortedtransaction.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {format(new Date(transaction.date), "PP")}
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="capitalize">
                    <span
                      style={{
                        background: categoryColors[transaction.category],
                      }}
                      className="px-2 rounded-md py-1 text-white text-sm"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell style={{
                    color:transaction.type === "EXPENSE"?"red":"green",
                  }}>
                    {transaction.type === "EXPENSE"? "-":"+"}
                    ₹{transaction.amount.toFixed(0)}</TableCell>
                    <TableCell>
                        {transaction.isRecurring ?(
                            <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>Hover</TooltipTrigger>
                              <TooltipContent>
                                <p>Add to library</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                        ):(
                            <Badge variant="outline" className='gap-1'>
                                <Clock className="h-3 w-3"/>
                                One-time
                            </Badge>
                        )}
                    </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
