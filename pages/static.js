import { Link } from "@chakra-ui/react";
import React from "react";

const Static = () => {
  return (
    <div>
      <h1>정적페이지입니다.</h1>
      <div>
        <Link href="/">홈으로</Link>
      </div>
      <Link href="/dynamic">동적페이지</Link>
    </div>
  );
};

export default Static;
