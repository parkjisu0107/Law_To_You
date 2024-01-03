import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCounselListApi } from "../../api/board/CounselWriteApi";
import { useAppSelector } from "../../store";
import "../scss/Board.scss";
import BoardForm from "./BoardForm";

const BoardCounsel = () => {
  const [data, setData] = useState({
    // count: "",
    pageInfo: {},
    consultingList: [],
  });

  let params = {
    page: 1,
    size: 10,
  };

  useEffect(() => {
    getCounselListApi(params)
      .then((res) => {
        if (typeof res === "object") {
          setData(res);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const mode = useAppSelector((state) => state.user.mode);

  return (
    <>
      <div className="board">
        <div className="board-header">
          <span>온라인상담</span>
          <div>
            사용자가 올린 온라인 상담 문의글에 간략하게 답변을 달 수
            있습니다.답변이 채택된다면 사용자에게 더욱 심도깊은 상담을 이어나갈
            수 있습니다. 답변이 채택되고 상담이 진행된다면 답변 등록 시 입력한
            법봉을 추가로 받으실 수 있습니다.
          </div>
        </div>
        <div className="search-box">
          <input className="search-input"></input>
          <Icon
            className="search-button"
            icon="majesticons:search-line"
            color="#675d50"
          />
        </div>
      </div>
      <BoardForm data={data.consultingList} type="counsel" />
      {mode === "user" && (
        <div>
          <Button className="input-button" variant="contained">
            글 작성하기
          </Button>
        </div>
      )}
    </>
  );
};

export default BoardCounsel;
