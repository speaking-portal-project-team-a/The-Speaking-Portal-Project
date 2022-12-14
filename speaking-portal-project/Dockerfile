FROM --platform=linux/amd64 node:19

# Install ffmpeg on docker image
RUN apt-get update && apt-get install -y ffmpeg libavcodec-dev libavformat-dev

# Create and initialize the working directory of the docker image
COPY . /app

WORKDIR /app

RUN npm install

# Expose port used in api.ts
EXPOSE 3000

CMD ["npm", "start"]