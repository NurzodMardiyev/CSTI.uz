server {
    listen 80;
    server_name csti.uz;  # Replace with your domain or IP

    root /home/devops/markaz/build/;  # Path to the build directory of your React app
    index index.html index.htm;

    location / {
        try_files $uri /index.html;  # If the file isn't found, serve index.html (for client-side routing)
    }

    # Optional: Gzip compression to improve loading speed
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_vary on;
    gzip_min_length 1000;
}