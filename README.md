
## 環境設置指南

### 前置要求
- Node.js（建議使用 LTS 版本）
- Python 3.x
- Docker 與 Docker Compose
- MongoDB

### 後端設置
1. 進入 `backend` 目錄：
    ```sh
    cd backend
    ```
2. 創建並啟動虛擬環境：
    ```sh
    python -m venv venv
    .\venv\Scripts\activate # 對於 Windows 系統
    # source venv/bin/activate # 對於 macOS/Linux 系統
    ```
3. 安裝依賴：
    ```sh
    pip install -r requirements.txt
    ```
4. 運行 Flask 應用：
    ```sh
    flask run
    ```

### 前端設置
1. 進入 `frontend` 目錄：
    ```sh
    cd frontend
    ```
2. 安裝依賴：
    ```sh
    npm install
    ```
3. 運行 React 應用：
    ```sh
    npm start
    ```

### 使用 Docker
1. 在項目根目錄中使用 Docker Compose 啟動所有服務：
    ```sh
    docker-compose up --build
    ```

## 使用指南
1. 打開瀏覽器並訪問 `http://localhost:3000`，進行系統登入。
2. 輸入正確的使用者代號和密碼進行登入。
3. 登入後可以進行專案資料的查詢、修改和刪除操作。

4. 通過 http://localhost:5000 訪問 Flask API。

## 注意事項
- 確保 MongoDB 數據庫已啟動並運行。
- 在開發環境中，請使用 `npm start` 和 `flask run` 分別啟動前端和後端應用。
- 在生產環境中，請使用 Docker Compose 來管理和啟動所有服務。

## 版權及授權
此項目遵循 MIT 許可證。詳情請參閱 LICENSE 文件。

## 此為測試
11111
