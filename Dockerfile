FROM harbor.ci.flexio.io/flexio/static-assets:1.0.0

COPY dist /usr/share/nginx/html
