FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src /app/src
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=build /app/target/Sulong-Edukasyon-0.0.1-SNAPSHOT.jar /app/SulongEdukasyon.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/SulongEdukasyon.jar"]
