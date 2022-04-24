import React from "react";
import { Images } from "./PartnerData";
import styles from "./partner.module.scss";

const Partner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.partnerImages}>
        {Images.map((image, i) => {
          return (
            <div className={styles.galleryContainer}>
              <img key={i} alt={i} src={image} width="150" height={150} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
