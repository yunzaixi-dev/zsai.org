# 多阶段构建 - 构建阶段
FROM node:23-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN yarn build

# 多阶段构建 - 生产阶段
FROM nginx:alpine AS production

# 复制Nginx配置
COPY --from=builder /app/build /usr/share/nginx/html

# 添加自定义Nginx配置以支持SPA路由
RUN echo 'server { \
    listen 4444; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    error_page 404 /index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # 缓存静态资源 \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 30d; \
        add_header Cache-Control "public, no-transform"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 4444

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# 运行命令示例（不是Dockerfile的一部分，仅作参考）:
# 构建镜像: docker build -t zsai-org:latest .
# 运行容器: docker run -d --name zsai-org -p 8421:80 zsai-org:latest
