# Elasticsearch container

## Installation

1. Install [Docker](https://www.docker.com/)

2. Build image
    ```
    docker build -t elasticsearch .
    ```

3. Verify image availability
    ```
    docker images
    ```

4. Run container
    ```
    docker run -d -p 9200:9200 -p 9300:9300 -v /usr/share/elasticsearch/data --name elastic elasticsearch 
    ```
