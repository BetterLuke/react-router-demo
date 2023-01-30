import { useSearchParams } from "react-router-dom";

export default function HelloPage() {
  const [searchParams] = useSearchParams();

  // You can get more help here： https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const params = new URLSearchParams(searchParams);

  return <p>{`Hello, ${params.get("name")} !`}</p>;
}
