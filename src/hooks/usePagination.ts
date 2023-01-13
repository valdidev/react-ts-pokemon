import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);

  console.log({ searchParams });

  const nextPage = () => {
    setPage(page + 1);
    navigate(`/?page=${page + 1}`);
  };

  const prevPage = () => {
    setPage(page - 1);
    navigate(`/?page=${page - 1}`);
  };

  useEffect(() => {
    setPage(parseInt(searchParams.get("page")!) || 1);
  });

  return {
    page,
    setPage,
    nextPage,
    prevPage,
  };
};
