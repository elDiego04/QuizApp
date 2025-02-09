package com.quizserver;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuizserverApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.load();

		// Poner las variables de entorno a nivel de la aplicación
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

		SpringApplication.run(QuizserverApplication.class, args);
	}

}
