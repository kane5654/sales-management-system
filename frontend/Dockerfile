# 使用官方的 Node.js 基礎映像
FROM node:14

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 並安裝 Node.js 依賴
COPY package.json package-lock.json ./
RUN npm install

# 複製應用程式代碼
COPY . .

# 構建應用
RUN npm run build

# 使用靜態服務器提供構建結果
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# 暴露應用的埠
EXPOSE 3000
