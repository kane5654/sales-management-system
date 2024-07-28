# 使用官方的 Python 基礎映像
FROM python:3.8-slim

# 設置工作目錄
WORKDIR /app

# 複製 requirements.txt 並安裝 Python 依賴
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# 複製應用程式代碼
COPY . .

# 暴露應用的埠
EXPOSE 5000

# 啟動 Flask 應用
CMD ["flask", "run", "--host=0.0.0.0"]
