# MongoDB container

## Installation

1. Install [Docker](https://www.docker.com/)

2. Build image
    ```
    docker build -t mongo .
    ```

3. Verify image availability
    ```
    docker images
    ```

4. Run container
    ```
    docker run -d -p 27017:27017 --name mongo mongo
    ```
