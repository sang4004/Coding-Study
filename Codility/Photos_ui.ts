import React from "react";
import PhotosContext from "./PhotosContext";
import ThemeContext from "./ThemeContext";

export default function PhotosList() {
  return (
    /**
     * ThemeContext.Consumer
     * - ThemeContext에서 현재 theme 값을 가져오기 위한 Consumer
     * - 문제 조건에서 Context/Consumer가 제공된다고 했기 때문에 Consumer 패턴 사용
     */
    <ThemeContext.Consumer>
      {({ theme }) => {
        /**
         * nowDark
         * - theme가 "dark"인지 여부를 boolean으로 변환
         * - 이후 스타일 분기(배경/텍스트 색)를 간단하게 하기 위해 사용
         */
        const nowDark = theme === "dark";

        return (
          /**
           * PhotosContext.Consumer
           * - PhotosContext에서 photos 리스트와 fetchPhotos 함수를 가져옴
           */
          <PhotosContext.Consumer>
            {({ photos, fetchPhotos }) => {
              return (
                /**
                 * ✅ 요구사항 1
                 * - div id="photos-list-container"
                 * ✅ 요구사항 4
                 * - theme에 따라 배경색 변경
                 *   - light: white
                 *   - dark: black
                 */
                <div
                  id="photos-list-container"
                  style={{ background: nowDark ? "black" : "white" }}
                >
                  {/**
                   * ✅ 요구사항 2
                   * - ul id="photos-list"
                   */}
                  <ul id="photos-list">
                    {/**
                     * ✅ 요구사항 3
                     * - photos 배열을 map으로 돌려 <li> 리스트 렌더링
                     * - key는 title + index 조합으로 설정
                     */}
                    {photos.map((photo, index) => (
                      <li key={`${photo.title}-${index}`}>
                        {/**
                         * ✅ 요구사항 3 (각 photo)
                         * - title은 <h3>로 표시
                         * ✅ 요구사항 4 (텍스트 색)
                         * - light: black
                         * - dark: white
                         */}
                        <h3 style={{ color: nowDark ? "white" : "black" }}>
                          {photo.title}
                        </h3>

                        {/**
                         * ✅ 요구사항 3 (각 photo)
                         * - img src는 photo.imgSrc 사용
                         * - alt는 접근성 위해 title 사용
                         */}
                        <img src={photo.imgSrc} alt={photo.title} />
                      </li>
                    ))}
                  </ul>

                  {/**
                   * ✅ 요구사항 5
                   * - PhotosList 아래에 버튼 배치
                   * - id="fetch-photos"
                   * - 클릭 시 fetchPhotos() 호출
                   */}
                  <button
                    id="fetch-photos"
                    type="button"
                    onClick={() => fetchPhotos()}
                  >
                    Fetch photos
                  </button>
                </div>
              );
            }}
          </PhotosContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
}
