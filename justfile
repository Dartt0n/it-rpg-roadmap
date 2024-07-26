build:
    docker buildx build -t it-rpg-roadmap:latest .

stop:
    docker stop it-rpg-roadmap || true

run: stop build
    docker run -p 3000:3000 --rm --name it-rpg-roadmap it-rpg-roadmap:latest