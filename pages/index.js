import { Link } from "@chakra-ui/react";

export default function Index() {
  return (
    <div>
      <h1>반갑꼬리</h1>
      <div>
        <Link href="/static">정적페이지</Link>
      </div>
      <Link href="/dynamic">동적페이지</Link>
    </div>
  );
}
