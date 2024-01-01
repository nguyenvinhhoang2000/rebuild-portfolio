import React, { useCallback } from "react";
import PropTypes from "prop-types";

import styles from "./CardProject.module.scss";

function CardProject({ index, title, manageModal }) {
  const onMouseEnter = useCallback((e) => {
    manageModal(true, index, e.clientX, e.clientY);
  }, []);

  const onMouseLeave = useCallback((e) => {
    manageModal(false, index, e.clientX, e.clientY);
  }, []);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.CardProject}
    >
      <h2>{title}</h2>
      <span>Design & Development</span>
    </div>
  );
}

CardProject.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  manageModal: PropTypes.func.isRequired,
};

export default CardProject;
