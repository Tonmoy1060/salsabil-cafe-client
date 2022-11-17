import React, { useState } from "react";
import { useEffect } from "react";

const useTimeAndDate = () => {
  const [timeAndDate, setTimeAdnDate] = useState();

  const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
  useEffect(() => {
    setTimeAdnDate(date);
  }, [date]);

  return [timeAndDate];
};

export default useTimeAndDate;
