import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFreeListApi } from "../../api/board/FreeBoardApi";
import "../scss/Board.scss";
import BoardForm from "./BoardForm";

const BoardFree = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    count: 0,
    pageInfo: {},
    freeboards: [],
  });

  let params = {
    page: 1,
  };

  useEffect(() => {
    getFreeListApi(params)
      .then((res) => {
        if (typeof res === "object") {
          data.setData(res);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="board">
        <div className="board-header">
          <span>고민나누기</span>
          <div>
            자유게시판 설명 내용 작성하기! 사용자가 올린 온라인 상담 문의글에
            간략하게 답변을 달 수 있습니다.답변이 채택된다면 사용자에게 더욱
            심도깊은 상담을 이어나갈 수 있습니다. 답변이 채택되고 상담이
            진행된다면 답변 등록 시 입력한 법봉을 추가로 받으실 수 있습니다.
          </div>
        </div>
        <div className="search-box">
          <input className="search-input"></input>
          <Icon
            className="search-button"
            icon="majesticons:search-line"
            color="#675d50"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <BoardForm data={data.freeboards} type="freeboard" />
      <div className="button-wrapper">
        <Button
          className="board-write-btn"
          variant="contained"
          onClick={() => {
            navigate("/freewrite");
          }}
        >
          글 작성하기
        </Button>
      </div>
    </>
  );
};

export default BoardFree;
