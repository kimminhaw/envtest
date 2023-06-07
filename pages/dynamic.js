import { Link } from "@chakra-ui/react";
import React from "react";

const DynamicPage = ({ dynamicContent }) => {
  return (
    <div>
      <h1>동적페이지입니다.</h1>
      <div>
        <Link href="/">홈으로</Link>
      </div>
      <Link href="/static">정적페이지</Link>
      <p>{dynamicContent}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const dynamicContent =
    process.env.NEXT_PUBLIC_DYNAMIC_TEXT || "Default dynamic content";

  return {
    props: {
      dynamicContent,
    },
  };
}

export default DynamicPage;
