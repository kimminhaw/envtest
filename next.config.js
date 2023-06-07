module.exports = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/404": { page: "/404" },
      "/dynamic": { page: "/dynamic" }, // '/dynamic' 페이지 추가
      // 다른 정적 페이지들...
    };
  },
  // 사전 렌더링에서 제외할 페이지 설정
  // 해당 페이지는 런타임에 서버 측에서 처리됨
  trailingSlash: true, // 'exportTrailingSlash'을 'trailingSlash'로 변경
};
