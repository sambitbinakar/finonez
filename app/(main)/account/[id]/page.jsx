import { getAccountWithTransacions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import TransactionTable from "../_components/transaction-table";
import { BarLoader } from "react-spinners";

const AccountPage = async ({ params }) => {
  const accountData = await getAccountWithTransacions(params.id);

  if (!accountData) {
    notFound();
  }
  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5 ">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-4xl sm:text-4xl fon-bold gradient-title capitalize">
            {account.name}
          </h1>
          <p>
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>
        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ₹{parseFloat(account.balance)}
          </div>
          <p className="text-sm">{account._count.transactions} Transactions</p>
        </div>
      </div>
      {/* Chart Section */}

      {/* Transcation Table */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TransactionTable transaction={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountPage;
