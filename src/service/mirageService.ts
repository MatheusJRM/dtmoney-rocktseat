import { httpCommon } from "./httpCommon";

function getTransactions() {
  return httpCommon.get("/transactions");
}

export default {
  getTransactions,
};
