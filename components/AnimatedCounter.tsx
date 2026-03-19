"use client";

import CountUp from "react-countup";
import { formatAmount } from "@/lib/utils";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const isMounted = true;

  return (
    <span className="w-full text-right">
      {isMounted ? (
        <CountUp
          end={amount}
          decimals={2}
          duration={1.5}
          separator=","
          decimal="."
          formattingFn={formatAmount}
        />
      ) : (
        formatAmount(amount)
      )}
    </span>
  );
};

export default AnimatedCounter;
