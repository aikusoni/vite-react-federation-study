# micro-frontend 테스트

### 개요
React + Vite.js + vite-plugin-federation + nginx 을 사용해 micro frontend 구현 할 수 있는지 테스트 해보기 위해 작성한 코드

### 각 폴더 설명
- board, management : vite-plugin-federation에서 리모트로 사용되는 사이트
- portal : vite-plugin-federation에서 호스트로 사용되는 사이트 (메인 사이트)
- nginx : nginx 관련 설정 예제 파일

### 로컬 실행 방법 예시
1. portal을 제외한 나머지 프로젝트를 빌드하고 실행한다.

```sh
$ npm run build
$ npm run preview
```

2. portal을 실행한다.
```sh
$ npm run dev
```

### nginx 배포용 빌드 예시
```sh
$ cd board
$ npm run build
$ cd ../management
$ npm run build
$ cd ../portal
$ npm run build

# 배포된 파일은 /release 폴더에 생성된다.
$ cd ../release
$ ls
board   management  portal
```

### nginx install 예시

예시로 제공된 [nginx.conf](./nginx.conf) 파일이 정상적으로 작동하려면 다음 스크립트를 사용해서 nginx를 설치해야 함.

```sh
# nginx 설치 파일 폴더에서 다음 명령어 실행
# prefix는 nginx가 설치될 폴더
$ ./configure --prefix=/users/nginx --without-http_rewrite_module --without-http_gzip_module -with-http_auth_request_module
$ make
# make 실행 후 에러가 없으면 다음 명령어 실행
$ make install
# make install 실행 후 에러가 없으면 nginx 설치 완료
```
