import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const DepositWithdrawTabs = () => {
  return (
    <div className="w-full  mt-4 text-black">
      <Tabs>
        <div className="p-4 text-white">
          <TabList className="flex w-full justify-center gap-2   bg-jili-bgForm p-1 rounded-md ">
            <Tab
              className=" w-full text-center cursor-pointer  rounded   focus:outline-none "
              selectedClassName="font-semibold p-1  bg-backgroundV2Color text-black"
            >
              Deposit
            </Tab>
            <Tab
              className="w-full text-center cursor-pointer  rounded p-1  focus:outline-none "
              selectedClassName="font-semibold text-black  bg-backgroundV2Color"
            >
              Withdraw
            </Tab>
          </TabList>
        </div>
        <div className="bg-jili-bgBlack">
          <TabPanel>
            <Deposit />
          </TabPanel>
          <TabPanel>
            <Withdraw/>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default DepositWithdrawTabs;
