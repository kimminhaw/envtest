# 이미지의 기반이 될 Docker 이미지 선택
FROM node:18.16.0

# 작업 디렉토리 생성
WORKDIR /usr/src/app

# 프로젝트 파일 복사
COPY . .

# 환경 변수 파일 복사
COPY .env .env

# 필요한 패키지 설치
COPY package.json .
COPY package-lock.json .
RUN npm install

# 애플리케이션 빌드
RUN npm run build

# 컨테이너 실행 시 애플리케이션 실행
CMD ["npm", "run", "start"]
