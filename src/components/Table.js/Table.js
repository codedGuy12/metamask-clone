import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./table.module.scss";
import { ThemeObject } from "../../context/themeContext";

dayjs.extend(relativeTime);

function Table() {
  const { theme } = ThemeObject();

  // Function to generate new data to append to table
  const appendNewData = useCallback(function () {
    // Function generates a random integer between the min and max value
    function getRndInteger(min = 0.1, max = 4.9, floor = true) {
      //  Generate transaction value
      if (floor) {
        let rndInteger = Math.floor(Math.random() * (max - min)) + min;

        // Change fee from number to string
        rndInteger = rndInteger.toString();

        // Truncate fee to 6 decimal places
        rndInteger = rndInteger.slice(0, rndInteger.indexOf(".") + 2);

        console.log("This is my number", rndInteger);
        // Change fee from string to number

        Number(rndInteger);

        return rndInteger;
      }

      // Generate transaction fee
      let rndInteger = Math.random() * (max - min) + min;

      // Change fee from number to string
      rndInteger = rndInteger.toString();

      // Truncate fee to 6 decimal places
      rndInteger = rndInteger.slice(0, rndInteger.indexOf(".") + 6);
      // Change fee from string to number

      Number(rndInteger);

      return rndInteger;
    }

    // Get a random block out number
    const blockOutNumber = [16997816, 17007014, 16996680, 17114119, 16886422][
      Math.floor(Math.random() * 5)
    ];

    // Generate random address
    const toAddress = `0x1${generateHash(6)}...`;

    // Generate random value
    const value = getRndInteger();

    const tableObject = {
      in: {
        TxHash: `0x${generateHash(9)}...`,
        Block: blockOutNumber,
        To: "0xC24aE123...",
        From: toAddress,
        Type: "IN",
        Age: Date.now(),
        Value: value,
        TxFee: getRndInteger(0.001, 0.00999, false),
      },

      out: {
        TxHash: `0x${generateHash(9)}...`,
        Block: blockOutNumber,
        From: "0xC24aE123...",
        To: toAddress,
        Type: "OUT",
        Age: Date.now(),
        Value: `${value} ETH`,
        TxFee: getRndInteger(0.001, 0.00999, false),
      },
    };

    return tableObject;
  }, []);

  const [data, setData] = useState([appendNewData()]);

  function generateHash(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const result = appendNewData();

      setData([result, ...data]);
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [appendNewData, data]);

  return (
    <div
      className={
        theme
          ? `${styles.page__container}`
          : `${styles.page__container} ${styles.lightMode}`
      }
    >
      <div className={styles.table__container}>
        <div className={styles.table__header}>
          <div>TxHash</div>
          <div>Block</div>
          <div>From</div>
          <div>Out</div>
          <div>To</div>
          <div>Age</div>
          <div>Value</div>
          <div>TxFee</div>
        </div>

        <div className={styles.table__body}>
          {data &&
            data.map((item, index) => {
              return (
                <div className={styles.transaction} key={index}>
                  {/* <div className={styles.in}>
                    <div>{item.in.TxHash}</div>
                    <div>{item.in.Block}</div>
                    <div>{item.in.From}</div>
                    <div>{item.in.Type}</div>
                    <div>{item.in.To}</div>
                    <div>
                      {dayjs(item.out.Age).fromNow() === "a few seconds ago"
                        ? "just now"
                        : dayjs(item.out.Age)
                            .fromNow()
                            .replace("minutes", "mins")
                            .replace("minute", "min")}
                    </div>
                    <div>{item.in.Value}</div>
                    <div>{item.in.TxFee}</div>
                  </div> */}

                  <div className={styles.out}>
                    <div>{item.out.TxHash}</div>
                    <div>{item.out.Block}</div>
                    <div>{item.out.From}</div>
                    <div>{item.out.Type}</div>
                    <div>{item.out.To}</div>
                    <div>
                      {dayjs(item.out.Age).fromNow() === "a few seconds ago"
                        ? "just now"
                        : dayjs(item.out.Age)
                            .fromNow()
                            .replace("minutes", "mins")
                            .replace("minute", "min")}
                    </div>
                    <div>{item.out.Value}</div>
                    <div>{item.out.TxFee}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Table;
